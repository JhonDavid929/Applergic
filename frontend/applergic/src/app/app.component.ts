import { Component } from '@angular/core';
import { IntroduccionComponent } from './componentes/introduccion/introduccion.component';
import { LoginComponent } from './componentes/login/login.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'applergic';
}
