import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { MenuComponent } from './menu/menu.component';
import { RedesComponent } from './redes/redes.component';
import { Section2Component } from './section-2/section-2.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ImagenesComponent,
    MenuComponent,
    RedesComponent,
    Section2Component
  ],
  exports:[
    ImagenesComponent,
    MenuComponent,
    RedesComponent,
    Section2Component
  ]
})
export class SharedModule { }
