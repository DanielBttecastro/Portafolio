import { Routes } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { EnConstruccionComponent } from './pages/en-construccion/en-construccion.component';

export const routes: Routes = [
  {
    path: '',
    component: EnConstruccionComponent,
  },{
    path: 'portafolio',
    component: PortafolioComponent,
  }
];
