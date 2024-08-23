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
}
