import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from '../../entidades/usuario';
import { UsuarioServicio } from '../../servicios/usuarioServicio';
import { log } from 'util';
import { Observable } from 'rxjs';

@Component({
  selector: 'crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})


export class CrearUsuarioComponent /*implements OnInit*/ {
  titulo: string = "Dinos quien eres";
  public usuarioNuevo: Usuario;
  valido: boolean;

  constructor(private usuarioServicio: UsuarioServicio){
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
    form.reset();
  }

  alPerderFoco() {
    if ( typeof this.usuarioNuevo.nombre !== "undefined"
        && this.usuarioNuevo.nombre !== "") {
          this.valido = true;
        }
  }
   
  




}
