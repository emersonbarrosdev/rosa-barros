import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-my-job',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, NgOptimizedImage],
  templateUrl: './my-job.component.html',
  styleUrl: './my-job.component.scss'
})
export class MyJobComponent {

}
