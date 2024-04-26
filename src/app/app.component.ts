import { Component, OnInit } from '@angular/core';




import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { AboutComponent } from './features/about/about.component';
import { ContactComponent } from './features/contact/contact.component';
import { EventsComponent } from './features/events/events.component';
import { FooterComponent } from './features/footer/footer.component';
import { GalleryComponent } from './features/gallery/gallery.component';
import { HomeComponent } from './features/home/home.component';
import { MyJobComponent } from './features/my-job/my-job.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    MyJobComponent,
    GalleryComponent,
    EventsComponent,
    ContactComponent,
    FooterComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'rosa-barros';
  isContact = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.checkIsContact();
  }

  private checkIsContact() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isContact = this.isContactRoute(event.url);
      }
    });
  }

  private isContactRoute(url: string): boolean {
    return url === '/contact';
  }
}