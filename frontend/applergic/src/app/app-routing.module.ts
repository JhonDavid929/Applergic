import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroduccionComponent } from './componentes/introduccion/introduccion.component';
import { LoginComponent } from './componentes/login/login.component';
import { CrearUsuarioComponent } from './componentes/crear-usuario/crear-usuario.component';
import { CrearEmergenciaComponent } from './componentes/crear-emergencia/crear-emergencia.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/intro',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'intro',
    component: IntroduccionComponent
  },
  {
    path: "registro",
    component: CrearUsuarioComponent
  },
  {
    path: "emergencia", 
    component: CrearEmergenciaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
