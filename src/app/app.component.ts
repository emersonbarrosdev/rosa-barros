import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './features/about/about.component';
import { ContactComponent } from './features/contact/contact.component';
import { EventsComponent } from './features/events/events.component';
import { FooterComponent } from './features/footer/footer.component';
import { GalleryComponent } from './features/gallery/gallery.component';
import { HomeComponent } from './features/home/home.component';
import { MyJobComponent } from './features/my-job/my-job.component';
import { HeaderComponent } from './shared/components/header/header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
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
export class AppComponent {
  title = 'rosa-barros';
}