import { Component} from '@angular/core';
import { NgForm, Form } from '@angular/forms';
import { Usuario } from '../../entidades/usuario';
import { UsuarioServicio } from '../../servicios/usuarioServicio';
import { Router } from '@angular/router';

@Component({
  selector: 'crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})


export class CrearUsuarioComponent {
  titulo: string = "Dinos quien eres";
  public usuarioNuevo: Usuario;
  valido: boolean;

  constructor(private usuarioServicio: UsuarioServicio, private router: Router){
    this.valido = false;
    this.usuarioNuevo = {
      "nombre": "",
      "email": "",
      "movil": "",
      "password": "",
      "imagen": "",
      "alimentos": [],
      }
  }

  onSubmit(form) {
    this.usuarioServicio.crearUsuario(this.usuarioNuevo)
    console.log(this.usuarioNuevo);
    this.router.navigate(['emergencia']);
  }

  alPerderFoco() {
    if ( typeof this.usuarioNuevo.nombre !== "undefined"
        && this.usuarioNuevo.nombre !== "") {
          this.valido = true;
        }
  }
}
