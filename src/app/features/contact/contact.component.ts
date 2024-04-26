import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogComponent } from '../../shared/components/dialog/dialog.component';
import { SendMailService } from '../../shared/service/send-mail.service';
import { NgxMaskDirective } from 'ngx-mask';
import { NgOptimizedImage } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    MatRadioModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    DialogComponent,
    NgxMaskDirective,
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {

  form!: FormGroup;
  budgetRequestSelected = ''
  eventTypes = ['Social', 'Corporativo', 'Cultural', 'Temático'];
  showDisplayForms!: boolean;

  constructor(
    private submitFormService: SendMailService,
    private matSnackBar: MatSnackBar,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit() {
    this.contactForms();
  }

  contactForms() {
    this.form = new FormGroup({
      fullName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl(''),
      eventType: new FormControl('', [Validators.required]),
      numberOfPeoples: new FormControl(''),
      message: new FormControl(''),
    });
  }

  onPhoneInput(event: any) {
    let newValue = event.target.value.replace(/\D/g, '');
    this.form.patchValue({
      phone: newValue
    });
  }

  openDialog() {
    if (this.form.dirty) {
      this.openDirtyFormDialog();
    } else {
      this.showDisplayForms = false;
    }
  }

  openDirtyFormDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.resetFormAndNavigate();
      } else {
        this.budgetRequestSelected = '1';
      }
    });
  }

  resetFormAndNavigate() {
    this.form.reset();
    this.budgetRequestSelected = '';
    this.showDisplayForms = false;
  }

  onSubmit() {
    if (this.form.valid) {
      this.submitFormService.sendMail(this.form.value).subscribe({
        next: res => {
          this.matSnackBar.open('Email enviado com sucesso!', '', {
            panelClass: 'success-snack-bar',
          });
          this.resetFormAndNavigate();
          this.router.navigate(['/']);
        },
        error: err => {
          console.log('Erro ao enviar email', err)
          this.matSnackBar.open('Erro ao enviar email. Tente novamente mais tarde!', '', {
            panelClass: 'danger-snack-bar',
          });
          this.resetFormAndNavigate();
        },
      });
    } else {
      this.matSnackBar.open('Por favor, preencha os campos obrigatórios', '', {
        panelClass: 'alert-snack-bar',
      });
    }
  }

  onCancel() {
    this.form.reset();
    this.showDisplayForms = false
    this.budgetRequestSelected = '';
  }
}
