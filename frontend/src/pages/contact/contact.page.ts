import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { MapComponent } from '../../components/map/map.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, MapComponent],
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.css'],
})
export class ContactPage {
  nombre: string = '';
  correo: string = '';
  mensaje: string = '';

  enviarFormulario(form: NgForm) {
    if (form.invalid) {
      return; // Evita el envío si el formulario es inválido
    }

    console.log('Nombre:', this.nombre);
    console.log('Correo:', this.correo);
    console.log('Mensaje:', this.mensaje);
  }
}
