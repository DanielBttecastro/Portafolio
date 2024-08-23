import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  constructor(private router: Router) { }

  ocultarMenu: boolean = true;

  desplegarMenu() {
    this.ocultarMenu = !this.ocultarMenu;
  }
  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (window.location.pathname === '/' || window.location.pathname === '/portafolio') {
      // Si ya estás en la página principal
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        this.ocultarMenu = !this.ocultarMenu;
      }
    } else {
      // Si no estás en la página principal, redirige a la página principal y luego desplaza
      this.router.navigate(['/portafolio']).then(() => {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            this.ocultarMenu = !this.ocultarMenu;
          }
        }, 500); // Añade un pequeño retraso para asegurar que la navegación se haya completado
      });
    }
  }
}
