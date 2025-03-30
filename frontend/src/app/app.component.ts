import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.components';
import { FooterComponent } from '../components/footer/footer.component';
import { HeroComponent } from '../components/hero/hero.component';

@Component({
  selector: 'app-root',
  imports: [HeroComponent, RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'frontend';
}
