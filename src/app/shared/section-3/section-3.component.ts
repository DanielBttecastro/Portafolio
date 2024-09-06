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
      },
      {
        her: "TypeORM"
      },
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
    const button = [
      {
        Nombre: "Repositorio",
        URL: "https://github.com/DanielBttecastro/Libreria"
      }
    ]
    const DescripcionCompleta = [
      {
        desc: `El proyecto Librería fue desarrollado por mí como parte del curso de Programación Distribuida y Paralela, con un enfoque educativo. Su objetivo principal fue proporcionar experiencia práctica en el uso de frameworks, la conexión a bases de datos y la integración entre back-end y front-end. A través de este proyecto, logré aplicar conocimientos clave en desarrollo ágil, gestión de datos y vinculación de la lógica del servidor con la interfaz de usuario, lo que me permitió enfrentar desafíos reales en el desarrollo de software.`
      },
      {
        desc: `El sistema proporcionará a los usuarios una manera eficiente de gestionar los recursos de la biblioteca. Permitirá el registro y la autenticación de usuarios, quienes podrán iniciar sesión con sus credenciales. Una vez dentro, los usuarios podrán agregar, editar y eliminar libros, cada uno con información detallada como título, autor, género y estado (disponible o prestado). Además, el sistema facilitará la gestión de préstamos, permitiendo a los usuarios tomar prestados y devolver libros, y llevará un registro de los préstamos y sus fechas de vencimiento. Los usuarios también podrán buscar libros por título, autor o género, y recibirán notificaciones cuando un libro prestado esté próximo a su fecha de vencimiento, asegurando una administración efectiva de sus actividades en la biblioteca.`
      }
    ]
    const herramientas = [
      {
        her: "React.Js"
      },
      {
        her: "SCSS"
      },
      {
        her: "Asp.Net Core"
      },
      {
        her: "SQL Server"
      },
      {
        her: "Entity Framework"
      }
    ]
    const data = {
      Nomb: 'Libreria',
      Desc: "Esta página contiene información sobre el proyecto libreria donde se incluye la descripción general del proyecto, las herramientas utilizadas y enlace al repositorio.",
      Botones: button,
      Imagen: "Proyectos/Libreria/Libreria.png",
      DescripcionCompleta: DescripcionCompleta,
      Herramientas: herramientas
    };
    this.dataService.setData(data);
    this.router.navigate(['/proyecto']);
  }

  Veterinaria() {
    const button = [
      {
        Nombre: "Repositorio",
        URL: "https://github.com/DanielBttecastro/PETS"
      }
    ]
    const DescripcionCompleta = [
      {
        desc: `El proyecto PETS fue desarrollado por mí como parte del curso de Programación Distribuida y Paralela, con un enfoque educativo. El objetivo principal del proyecto fue modernizar y digitalizar los procesos de registro y control de información del centro veterinario PETS S.A., ubicado en Cartagena. El sistema está diseñado para reemplazar el proceso manual y desorganizado que se realizaba en MS Excel, proporcionando una solución web integral para la gestión de datos.`
      },
      {
        desc: `
El sistema permitirá a PETS S.A. gestionar de manera eficiente la información de sus operaciones a través de una aplicación web. Los usuarios podrán registrar y mantener la información de las mascotas, que incluye detalles como identificación, nombre, raza, edad, peso, medicamento y cliente. También podrán gestionar la información de los clientes, con datos como cédula, nombres, apellidos, dirección y teléfono. Además, el sistema facilitará la administración de medicamentos, incluyendo su nombre, descripción y dosis.`  }
      ,
      {
        desc: `La aplicación proporcionará una interfaz intuitiva para agregar, editar y eliminar registros, así como generar informes y visualizar datos a través de tablas y vistas. Este enfoque permitirá un control más eficiente de los datos y una mejor generación de informes, enfrentando así los desafíos de gestión de información del centro veterinario y mejorando su operación general.`
      }
    ]
    const herramientas = [
      {
        her: "React.Js"
      },
      {
        her: "SCSS"
      },
      {
        her: "Botstrap"
      },
      {
        her: "Asp.Net Core"
      },
      {
        her: "SQL Server"
      },
      {
        her: "Entity Framework"
      }
    ]
    const data = {
      Nomb: 'PET',
      Desc: "Esta página contiene información sobre el proyecto PET donde se incluye la descripción general del proyecto, las herramientas utilizadas y enlace al repositorio.",
      Botones: button,
      Imagen: "Proyectos/PET/PET.png",
      DescripcionCompleta: DescripcionCompleta,
      Herramientas: herramientas
    };
    this.dataService.setData(data);
    this.router.navigate(['/proyecto']);
  }
}
