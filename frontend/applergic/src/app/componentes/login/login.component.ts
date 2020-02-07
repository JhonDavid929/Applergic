import { Component, OnInit } from '@angular/core';
import { UsuarioServicio } from '../../servicios/usuarioServicio';
import { MensajeServicio } from '../../servicios/mensajeServicio';
import { Usuario } from 'src/app/entidades/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  public usuarioLogin;

  constructor(private usuarioServi: UsuarioServicio, private mensajeServi: MensajeServicio, private router: Router) { 
    this.usuarioLogin = {
      "email": "",
      "password": "",
      }
  }

  ngOnInit() {
    sessionStorage.removeItem("user");
  }

  logIn(form){
    this.usuarioServi.logIn(this.usuarioLogin);
    console.log(this.usuarioLogin);
    this.router.navigate(['alergias']);
  }
}
