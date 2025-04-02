import { Component } from '@angular/core';
import { MiniHeroComp } from '../mini-hero/mini-hero.comp';

@Component({
  imports: [MiniHeroComp],
  selector: 'about-component',
  templateUrl: './about.component.html',
  styleUrls: [
    './about.component.css',
    './what_we_do.css',
    './our_staff.css',
    //
  ],
})
export class AboutComponent {}
