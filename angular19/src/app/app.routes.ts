import { Routes } from '@angular/router';
import { AboutPage } from '../pages/about/about.page';
import { ContactPage } from '../pages/contact/contact.page';
import { ServicesPage } from '../pages/services/services.page';
import { HomePage } from '../pages/home/home.page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'contacto', component: ContactPage },
  { path: 'nosotros', component: AboutPage },
  { path: 'servicios', component: ServicesPage },
  { path: '**', redirectTo: '' },
];
