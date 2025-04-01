import { Component, OnInit } from '@angular/core';
import { ServicesComponent } from '../../components/services/services.component';
import { BlogsComponent } from '../../components/blogs/blogs.component';
import { MapComponent } from '../../components/map/map.component';
import { VideoComponent } from '../../components/video/video.component';
import { TestimoniesComponent } from '../../components/testimonies/testimonies.component';
import { HeroComponent } from '../../components/hero/hero.component';

@Component({
  imports: [
    ServicesComponent,
    VideoComponent,
    BlogsComponent,
    MapComponent,
    TestimoniesComponent,
    HeroComponent
  ],
  templateUrl: 'home.page.html',
})
export class HomePage {}
