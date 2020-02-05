import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { IntroduccionComponent } from './componentes/introduccion/introduccion.component';
import { LoginComponent } from './componentes/login/login.component';
import { CrearUsuarioComponent } from './componentes/crear-usuario/crear-usuario.component';
import { HomeComponent } from './componentes/home/home.component';
import { ConfiguracionAlergiasComponent } from './componentes/configuracion-alergias/configuracion-alergias.component';
import { CrearEmergenciaComponent } from './componentes/crear-emergencia/crear-emergencia.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { FinRegistroComponent } from './componentes/fin-registro/fin-registro.component';
import { ContrasenaOlvidadaComponent } from './componentes/contrasena-olvidada/contrasena-olvidada.component';
import { ResultadoEscanerComponent } from './componentes/resultado-escaner/resultado-escaner.component';
import { EscanerComponent } from './componentes/escaner/escaner.component';
import { ConfirmacionAlergiasComponent } from './componentes/confirmacion-alergias/confirmacion-alergias.component';
import { LectorQrNFCComponent } from './componentes/lector-qr-nfc/lector-qr-nfc.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: InicioComponent
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
    path: 'registro',
    component: CrearUsuarioComponent
  },
  {
    path: 'alergias',
    component:  ConfiguracionAlergiasComponent
  },
  {
    path: 'confirmacion-alergias',
    component:  ConfirmacionAlergiasComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'emergencia',
    component: CrearEmergenciaComponent
  },
  {
    path: 'fin',
    component: FinRegistroComponent
  },
  {
    path: 'contraseña_olvidada',
    component: ContrasenaOlvidadaComponent
  },
  {
    path: 'escaner',
    component: EscanerComponent
  },
  {
    path: 'escaneo',
    component: ResultadoEscanerComponent

  },
  {
    path: 'lectores',
    component: LectorQrNFCComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
