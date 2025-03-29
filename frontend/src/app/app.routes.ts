import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.componets';
import { AboutPage } from '../pages/about/about.page';
import { ContactPage } from '../pages/contact/contact.page';
import { ServicesPage } from '../pages/services/services.page';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactPage },
  { path: 'about', component: AboutPage },
  { path: 'services', component: ServicesPage },
  { path: '**', redirectTo: '' },
];
