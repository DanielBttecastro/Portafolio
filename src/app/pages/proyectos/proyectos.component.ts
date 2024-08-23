import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.scss'
})
export class ProyectosComponent {
  Nomb!: string;
  Desc!: string;
  Btn!: any;
  Img!: string;
  DescripcionCompleta!:any;
  Herramientas!:any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    const data = this.dataService.getData();
    if (data) {
      this.Nomb = data.Nomb;
      this.Desc = data.Desc;
      this.Btn = data.Botones;
      this.Img= data.Imagen;
      this.DescripcionCompleta=data.DescripcionCompleta;
      this.Herramientas=data.Herramientas;
    }
  }
}
