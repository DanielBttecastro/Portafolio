import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ImagenesComponent,
    MenuComponent
  ],
  exports:[
    ImagenesComponent,
    MenuComponent
  ]
})
export class SharedModule { }
