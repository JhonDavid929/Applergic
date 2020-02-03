import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { CrearUsuarioComponent } from './componentes/crear-usuario/crear-usuario.component';
import { CrearEmergenciaComponent } from './componentes/crear-emergencia/crear-emergencia.component';
import { IntroduccionComponent } from './componentes/introduccion/introduccion.component';
import { HomeComponent } from './componentes/home/home.component';
import { ConfiguracionAlergiasComponent } from './componentes/configuracion-alergias/configuracion-alergias.component';
import { MensajeServicio } from './servicios/mensajeServicio';
import { UsuarioServicio } from './servicios/usuarioServicio';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IntroduccionComponent,
    AppComponent,
    CrearUsuarioComponent,
    CrearEmergenciaComponent,
    HomeComponent,
    ConfiguracionAlergiasComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    ],

  providers: [MensajeServicio, UsuarioServicio],
  bootstrap: [AppComponent]
})
export class AppModule { }
