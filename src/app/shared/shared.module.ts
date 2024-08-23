import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { MenuComponent } from './menu/menu.component';
import { RedesComponent } from './redes/redes.component';
import { Section2Component } from './section-2/section-2.component';
import { Section3Component } from './section-3/section-3.component';
import { Section4Component } from './section-4/section-4.component';
import { ProyectoSection1Component } from './proyectos/proyecto-section-1/proyecto-section-1.component';
import { ProyectoSection2Component } from './proyectos/proyecto-section-2/proyecto-section-2.component';
import { ProyectoSection3Component } from './proyectos/proyecto-section-3/proyecto-section-3.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ImagenesComponent,
    MenuComponent,
    RedesComponent,
    Section2Component,
    Section3Component,
    Section4Component,
    ProyectoSection1Component,
    ProyectoSection2Component,
    ProyectoSection3Component
  ],
  exports: [
    ImagenesComponent,
    MenuComponent,
    RedesComponent,
    Section2Component,
    Section3Component,
    Section4Component,
    ProyectoSection1Component,
    ProyectoSection2Component,
    ProyectoSection3Component

  ]
})
export class SharedModule { }
