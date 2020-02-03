import { Component, OnInit } from '@angular/core';
import { UsuarioServicio } from '../../servicios/usuarioServicio';
import { MensajeServicio } from '../../servicios/mensajeServicio';
import { Usuario } from 'src/app/entidades/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  public usuarioLogin;

  constructor(private usuarioServi: UsuarioServicio, private mensajeServi: MensajeServicio) { 
    this.usuarioLogin = {
      "email": "",
      "password": "",
      }
  }

  ngOnInit() {
  }

  logIn(form){
    this.usuarioServi.logIn(this.usuarioLogin);
    console.log(this.usuarioLogin);
  }
}
