import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-section-3',
  standalone: true,
  imports: [],
  templateUrl: './section-3.component.html',
  styleUrl: './section-3.component.scss'
})
export class Section3Component {

  constructor(private dataService: DataService, private router: Router) { }

  Cambiar() {
    const button = [
      {
        Nombre: "Back-end",
        URL: "https://github.com/DanielBttecastro/Proyecto-PPI-Backend"
      },

      {
        Nombre: "Front-end",
        URL: "https://github.com/DanielBttecastro/Proyecto-PPI-Frontend"
      }
    ]
    const DescripcionCompleta = [
      {
        desc: `El proyecto gestor PPI se desarrolló para el politécnico Jaime Isaba Cadavid,
        supliendo una de las necesidades de los programas Técnica Profesional en Programación de Sistemas de Información
        y Tecnología en Desarrollo de Software, donde dichos programas deben cumplir con el proyecto pedagógico
        institucional, el cual en cada semestre se realiza un proyecto, para el cual es necesario reunirse los diversos
        grupos de estudiantes con los asesores dados por la misma institución.`},
      {
        desc: `El proyecto consta de diversos módulos los cuales son la el agendamiento de citas, el seguimiento de proyectos mediante bitácoras, banners publicitarios, login, gestión académica y gestión documental, mi participación en el proyecto consistió en la construcción de la base de datos, el desarrollo del back-end, desarrollo front-end y la gestión documental de los módulos de seguimiento de proyectos, agendamientos de citas, banners publicitarios y login`
      }
    ]
    const herramientas = [
      {
        her: "React.Js"
      },
      {
        her: "Tailwind"
      },
      {
        her: "Nest.Js"
      },
      {
        her: "PostgreSQL"
      }
    ]
    const data = {
      Nomb: 'Gestor PPI',
      Desc: "Esta página contiene información sobre el proyecto de Gestión PPI donde se incluye la descripción general del proyecto, las herramientas utilizadas y enlace al repositorio.",
      Botones: button,
      Imagen: "Proyectos/GestorPPI/PPI JIC proyecto.png",
      DescripcionCompleta: DescripcionCompleta,
      Herramientas: herramientas
    };
    this.dataService.setData(data);
    this.router.navigate(['/proyecto']);
  }

  Libreria() {
    const button =
    {
      Nombre: "Repositorio",
      URL: "https://github.com/DanielBttecastro/Proyecto-PPI-Frontend"
    }
    const DescripcionCompleta = [
      {
        desc: `El proyecto gestor PPI se desarrolló para el politécnico Jaime Isaba Cadavid,
        supliendo una de las necesidades de los programas Técnica Profesional en Programación de Sistemas de Información
        y Tecnología en Desarrollo de Software, donde dichos programas deben cumplir con el proyecto pedagógico
        institucional, el cual en cada semestre se realiza un proyecto, para el cual es necesario reunirse los diversos
        grupos de estudiantes con los asesores dados por la misma institución.`},
      {
        desc: `El proyecto consta de diversos módulos los cuales son la el agendamiento de citas, el seguimiento de proyectos mediante bitácoras, banners publicitarios, login, gestión académica y gestión documental, mi participación en el proyecto consistió en la construcción de la base de datos, el desarrollo del back-end, desarrollo front-end y la gestión documental de los módulos de seguimiento de proyectos, agendamientos de citas, banners publicitarios y login`
      }
    ]
    const herramientas = [
      {
        her: "React.Js"
      },
      {
        her: "Tailwind"
      },
      {
        her: "Nest.Js"
      },
      {
        her: "PostgreSQL"
      }
    ]
    const data = {
      Nomb: 'Gestor PPI',
      Desc: "Esta página contiene información sobre el proyecto de Gestión PPI donde se incluye la descripción general del proyecto, las herramientas utilizadas y enlace al repositorio.",
      Botones: button,
      Imagen: "Proyectos/GestorPPI/PPI JIC proyecto.png",
      DescripcionCompleta: DescripcionCompleta,
      Herramientas: herramientas
    };
    this.dataService.setData(data);
    this.router.navigate(['/proyecto']);
  }
}
