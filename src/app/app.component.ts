import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'reto_frontend_2';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        switch (event.url) {
          case '/home':
            this.title = 'Consultas';
            break;
          case '/tests':
            this.title = 'Pruebas';
            break;
          case '/appointments':
            this.title = 'Citas';
            break;
          case '/affiliates':
            this.title = 'Afiliados';
            break;

          default:
            this.title = 'Consultas';
            break;
        }
      }
    });
  }
}
