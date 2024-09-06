import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-proyecto-section-3',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './proyecto-section-3.component.html',
  styleUrl: './proyecto-section-3.component.scss'
})
export class ProyectoSection3Component {
  @Input() DescripcionCompleta!: any
  @Input() Botones!: any
  @Input() Herramientas!: any
}
