import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { RouterModule, Routes } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { CrearUsuarioComponent } from './componentes/crear-usuario/crear-usuario.component';
import { CrearEmergenciaComponent } from './componentes/crear-emergencia/crear-emergencia.component';
import { IntroduccionComponent } from './componentes/introduccion/introduccion.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IntroduccionComponent,
    AppComponent,
    CrearUsuarioComponent,
    CrearEmergenciaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
