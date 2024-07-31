import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { MenuComponent } from './menu/menu.component';
import { RedesComponent } from './redes/redes.component';
import { Section2Component } from './section-2/section-2.component';
import { Section3Component } from './section-3/section-3.component';
import { Section4Component } from './section-4/section-4.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ImagenesComponent,
    MenuComponent,
    RedesComponent,
    Section2Component,
    Section3Component,
    Section4Component
  ],
  exports:[
    ImagenesComponent,
    MenuComponent,
    RedesComponent,
    Section2Component,
    Section3Component,
    Section4Component
  ]
})
export class SharedModule { }
