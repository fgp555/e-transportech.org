import { Component, OnInit } from '@angular/core';
import { AboutComponent } from '../../components/about/about.component';
import { MapComponent } from '../../components/map/map.component';

@Component({
  imports: [AboutComponent, MapComponent],
  templateUrl: 'about.page.html',
})
export class AboutPage {}
