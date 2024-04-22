import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, NgOptimizedImage],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  activePhotos = [ '01', '02', '03', '04','05','06','07','08','09' ]
  photos = ['10', '11', '12', '13','14','15','16','17','18']
}
