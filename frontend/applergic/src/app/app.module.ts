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
    CrearEmergenciaComponent

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
/*
const rutasApp: Routes = [

  {
    path: "lista",
    component: ListaUsuariosComponent
  },
  {
    path: "menu",
    component: MenuComponent
  },
  {
    path: "",
    redirectTo: "/lista",
    pathMatch: "full"
  },
  {
    path: "**",
    component: ErrorComponent
  }

]

//@NgModule dice a Angular que esta clase es un  modulo
@NgModule({
  declarations:[
    AplicacionComponent, //los componentes hay que declararlos
    NuevoUsuarioComponent, ListaUsuariosComponent, EditarUsuarioComponent, MenuComponent, ErrorComponent,
    //stylesUrls:
  ],
  imports:[BrowserModule, FormsModule, RouterModule.forRoot(rutasApp,{enableTracing: true})], //Aqui solo se importan otros modulos,
  bootstrap:[AplicacionComponent]
*/
