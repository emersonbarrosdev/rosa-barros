import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  allPhotos: string[] = [
    '01', '02', '03', '04', '05', '06', '07', '08', '09',
    '10', '11', '12', '13', '14', '15', '16', '17', '18'
  ];

  showAll: boolean = false;
  selectedPhotoIndex: number | null = null;

  get visiblePhotos(): string[] {
    return this.showAll ? this.allPhotos : this.allPhotos.slice(0, 9);
  }

  toggleShowAll(): void {
    this.showAll = !this.showAll;
  }

  openLightbox(index: number): void {
    this.selectedPhotoIndex = index;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.selectedPhotoIndex = null;
    document.body.style.overflow = '';
  }

  nextPhoto(event?: Event): void {
    if (event) event.stopPropagation();
    if (this.selectedPhotoIndex !== null) {
      this.selectedPhotoIndex = (this.selectedPhotoIndex + 1) % this.allPhotos.length;
    }
  }

  prevPhoto(event?: Event): void {
    if (event) event.stopPropagation();
    if (this.selectedPhotoIndex !== null) {
      this.selectedPhotoIndex = (this.selectedPhotoIndex - 1 + this.allPhotos.length) % this.allPhotos.length;
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (this.selectedPhotoIndex === null) return;

    if (event.key === 'Escape') {
      this.closeLightbox();
    } else if (event.key === 'ArrowRight') {
      this.nextPhoto();
    } else if (event.key === 'ArrowLeft') {
      this.prevPhoto();
    }
  }
}
