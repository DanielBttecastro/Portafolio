import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.scss'
})
export class PortafolioComponent {

}
