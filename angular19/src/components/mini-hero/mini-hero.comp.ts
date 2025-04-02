import { Component, Input } from '@angular/core';

@Component({
  selector: 'mini-hero-comp',
  templateUrl: './mini-hero.comp.html',
  styleUrls: ['./mini-hero.comp.css'],
})
export class MiniHeroComp {
  @Input() title: string = 'Título por defecto'; // Título con valor por defecto
}
