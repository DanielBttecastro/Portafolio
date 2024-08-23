import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-libreria',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './libreria.component.html',
  styleUrl: './libreria.component.scss'
})
export class LibreriaComponent {

}
