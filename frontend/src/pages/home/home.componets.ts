import { Component, OnInit } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { RequestComponent } from '../../components/request/request.component';
import { ServicesComponent } from '../../components/services/services.component';
import { AboutComponent } from '../../components/about/about.component';
import { BlogsComponent } from '../../components/blogs/blogs.component';
import { MapComponent } from '../../components/map/map.component';

@Component({
  imports: [
    HeroComponent,
    RequestComponent,
    ServicesComponent,
    AboutComponent,
    BlogsComponent,
    MapComponent,
    //
  ],
  templateUrl: 'home.component.html',
})
export class HomeComponent {}
