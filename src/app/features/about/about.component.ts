import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgOptimizedImage, CommonModule } from '@angular/common';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, NgOptimizedImage],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  showMore: boolean = false;
  isSmallScreen: MediaQueryList;
  
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher
  ) { 
    this.isSmallScreen = media.matchMedia('(max-width: 375px)');
    this.isSmallScreen.addListener(() => changeDetectorRef.detectChanges());
  }

  get isMobile(): boolean {
    return this.isSmallScreen.matches;
  }

  toggleShowMore() {
    this.showMore = !this.showMore;
    console.log('Mostrar mais:', this.showMore);
  }
}
