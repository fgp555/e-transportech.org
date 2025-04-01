import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MapComponent } from '../../components/map/map.component';
import { apiBaseURL, currentUrl } from '../../utils/constant';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, MapComponent],
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.css'],
})
export class ContactPage {
  nombre: string = '';
  correo: string = '';
  mensaje: string = '';
  enviando: boolean = false; // ✅ Se agregó esta línea
  mensajeExito: string = '';
  mensajeError: string = '';

  apiBaseURL = apiBaseURL;
  currentUrl = currentUrl;

  constructor(private http: HttpClient) {
    console.log('apiBaseURL', this.apiBaseURL, 'currentUrl', this.currentUrl);
  }

  enviarFormulario(form: NgForm) {
    if (form.invalid) {
      return; // Evita el envío si el formulario es inválido
    }

    this.enviando = true; // Inicia el estado de carga
    this.mensajeExito = '';
    this.mensajeError = '';

    const data = {
      name: this.nombre,
      email: this.correo,
      subject: 'Gracias por contactarnos',
      message: this.mensaje,
      currentUrl: this.currentUrl,
    };

    this.http.post(`${this.apiBaseURL}/api/contact/submit`, data).subscribe({
      next: (response) => {
        this.mensajeExito = 'Mensaje enviado correctamente.';
        form.resetForm(); // Reinicia el formulario
      },
      error: (error) => {
        this.mensajeError = 'Hubo un error al enviar el mensaje.';
        console.error('Error:', error);
      },
      complete: () => {
        this.enviando = false; // Finaliza el estado de carga
      },
    });
  }
}
