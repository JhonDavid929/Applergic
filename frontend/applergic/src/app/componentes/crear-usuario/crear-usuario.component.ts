import { Component/*, OnInit */} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from '../../entidades/usuario';




@Component({
  selector: 'crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})


export class CrearUsuarioComponent /*implements OnInit*/ {
  titulo: string = "Dinos quien eres";
  public usuarioNuevo: Usuario;
  valido: boolean;

  constructor(){
    this.valido = false;
    this.usuarioNuevo = new Usuario()
    //this.usuarioNuevo.nombre = '';
    //this.usuarioNuevo.email = '';
    //this.usuarioNuevo.movil = '';
    //this.usuarioNuevo.password = '';
  }
  onSubmit(form) {
    console.log("evento submit lanzado");
    console.log(this.usuarioNuevo);
    form.reset();
  }
  alPerderFoco() {
    if ( typeof this.usuarioNuevo.nombre !== "undefined"
        && this.usuarioNuevo.nombre !== "") {
          this.valido = true;
        }
  }
   
  




}
