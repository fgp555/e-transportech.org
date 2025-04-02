import { Component } from '@angular/core';
import { MapComponent } from '../../components/map/map.component';
import { MiniHeroComp } from '../../components/mini-hero/mini-hero.comp';

@Component({
  imports: [MapComponent, MiniHeroComp],
  templateUrl: 'services.page.html',
  styleUrls: ['services.page.css'],
})
export class ServicesPage {}
