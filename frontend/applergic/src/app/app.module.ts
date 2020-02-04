import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { CrearUsuarioComponent } from './componentes/crear-usuario/crear-usuario.component';
import { CrearEmergenciaComponent } from './componentes/crear-emergencia/crear-emergencia.component';
import { IntroduccionComponent } from './componentes/introduccion/introduccion.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { HomeComponent } from './componentes/home/home.component';
import { ConfiguracionAlergiasComponent } from './componentes/configuracion-alergias/configuracion-alergias.component';
import { MensajeServicio } from './servicios/mensajeServicio';
import { UsuarioServicio } from './servicios/usuarioServicio';
import { FinRegistroComponent } from './componentes/fin-registro/fin-registro.component';
import { AlergiasService } from './servicios/alergias.service';
import { ContrasenaOlvidadaComponent } from './componentes/contrasena-olvidada/contrasena-olvidada.component';
import { ResultadoEscanerComponent } from './componentes/resultado-escaner/resultado-escaner.component';
import { EscanerComponent } from './componentes/escaner/escaner.component';
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
    EscanerComponent
    FinRegistroComponent,
    ContrasenaOlvidadaComponent,
    ResultadoEscanerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([],{
      anchorScrolling: 'enabled'
    })
  ],
  providers: [
    AlergiasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
