import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-redes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './redes.component.html',
  styleUrl: './redes.component.scss'
})
export class RedesComponent {

  correoMandar:boolean=true;
  whatsappMandar:boolean=true;
  mensajeCopiado:boolean=true;
  ocultarRedes:boolean=true;
  mostrarCorreo(){
    this.correoMandar=!this.correoMandar
    this.ocultarRedes=!this.ocultarRedes
  }

  mostrarWhatsapp(){
    this.whatsappMandar=!this.whatsappMandar
    this.ocultarRedes=!this.ocultarRedes
  }

  async copiarCorreo(mensaje:string) {
      await navigator.clipboard.writeText(mensaje);
      this.mensajeCopiado=!this.mensajeCopiado
      setTimeout(() => {
        this.mensajeCopiado=!this.mensajeCopiado;
      }, 2000);
  }
}
