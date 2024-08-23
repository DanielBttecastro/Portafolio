import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-proyecto-section-2',
  standalone: true,
  imports: [],
  templateUrl: './proyecto-section-2.component.html',
  styleUrl: './proyecto-section-2.component.scss'
})
export class ProyectoSection2Component {
  @Input() Imagen!: string;
}
