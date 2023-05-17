import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Consultas';

  constructor(private router: Router) {
    // Set dinamically title on any route change.
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const arr = event.url.split('/');
        arr.shift();
        // Remove :id param from route
        if (arr.length == 3) {
          arr.pop();
          event.url = '/' + arr.join('/');
        }

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
          case '/appointments/create':
            this.title = 'Citas - Nueva Cita';
            break;
          case '/appointments/edit':
            this.title = 'Citas - Actualizar Cita';
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
