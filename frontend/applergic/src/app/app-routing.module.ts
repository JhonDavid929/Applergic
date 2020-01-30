import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearUsuarioComponent } from './componentes/crear-usuario/crear-usuario.component';


const routes: Routes = [
  {
    path: "registro",
    component: CrearUsuarioComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
