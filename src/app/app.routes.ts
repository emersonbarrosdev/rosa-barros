import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path: 'about',
        loadChildren: () => 
            import('./features/about/about.component').then(m => m.AboutComponent)
    },
    {
        path: 'my-job',
        loadChildren: () => 
            import('./features/my-job/my-job.component').then(m => m.MyJobComponent)
    },
    {
        path: 'gallery',
        loadChildren: () => 
            import('./features/gallery/gallery.component').then(m => m.GalleryComponent)
    },
    {
        path: 'events',
        loadChildren: () => 
            import('./features/events/events.component').then(m => m.EventsComponent)
    },
    {
        path: 'contact',
        loadChildren: () => 
            import('./features/contact/contact.component').then(m => m.ContactComponent)
    }
];
