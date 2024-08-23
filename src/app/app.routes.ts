import {  Routes } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { EnConstruccionComponent } from './pages/en-construccion/en-construccion.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';

export const routes: Routes = [
  {
    path: '',
    component: PortafolioComponent,
  },{
    path: 'portafolio',
    component: PortafolioComponent,
  },{
    path: 'proyecto',
    component: ProyectosComponent,
  }
];
