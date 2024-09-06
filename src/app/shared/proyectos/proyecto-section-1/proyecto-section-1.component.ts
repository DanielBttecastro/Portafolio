import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-proyecto-section-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyecto-section-1.component.html',
  styleUrl: './proyecto-section-1.component.scss'
})
export class ProyectoSection1Component {
  @Input() Nombre!:string;
  @Input() Descripcion!:string;
  @Input() Botones!:any;

  getGridClass() {
    return this.Botones.length !== 1
      ? 'md:grid-cols-2 grid-cols-1 grid gap-7 p-5 md:gap-5 md:p-5'
      : 'grid-cols-1 grid md:mt-5 p-5 md:gap-5 md:p-18';
  }
}
