import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { CrearUsuarioComponent } from './componentes/crear-usuario/crear-usuario.component';
import { CrearEmergenciaComponent } from './componentes/crear-emergencia/crear-emergencia.component';
import { IntroduccionComponent } from './componentes/introduccion/introduccion.component';
import { HomeComponent } from './componentes/home/home.component';
import { ConfiguracionAlergiasComponent } from './componentes/configuracion-alergias/configuracion-alergias.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { FinRegistroComponent } from './componentes/fin-registro/fin-registro.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IntroduccionComponent,
    AppComponent,
    CrearUsuarioComponent,
    CrearEmergenciaComponent,
    HomeComponent,
    ConfiguracionAlergiasComponent,
    InicioComponent,
    FinRegistroComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
