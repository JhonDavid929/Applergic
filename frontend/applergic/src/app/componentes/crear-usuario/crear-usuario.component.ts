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
  public usuarioNuevo;
  valido: boolean;

  constructor(private usuarioServicio: UsuarioServicio, private router: Router){
    this.valido = false;
    this.usuarioNuevo = {
      "_id": "",
      "nombre": "",
      "email": "",
      "movil": "",
      "password": "",
      "imagen": "",
      "alimentos": [],
      }
  }

  ngOnInit(){
    console.log(this.usuarioNuevo)
    //sessionStorage.removeItem("usuario");
  }

  onSubmit(form) {
    this.usuarioServicio.crearUsuario(this.usuarioNuevo)
    //sessionStorage.setItem("user", JSON.stringify(this.usuarioNuevo));
    console.log("Creado"+this.usuarioNuevo)
    this.router.navigate(['emergencia']);
  }

  alPerderFoco() {
    if ( typeof this.usuarioNuevo.nombre !== "undefined"
        && this.usuarioNuevo.nombre !== "") {
          this.valido = true;
        }
  }
}
