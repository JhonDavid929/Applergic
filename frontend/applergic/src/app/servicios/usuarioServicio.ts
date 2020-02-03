import { Injectable } from '@angular/core';
import { Usuario } from '../entidades/usuario';
import { MensajeServicio } from './mensajeServicio';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UsuarioServicio {
    
  constructor(private clienteHttp: HttpClient, private mensaje: MensajeServicio) {
    
  }

  crearUsuario(usuario: Usuario){
    let params = JSON.stringify(usuario);
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
    let user = this.clienteHttp.post("http://127.0.0.1:4000/api/usuarios/registro", params, {headers: headers}).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
    console.log(user)
    return user;
  }

  logIn(usuario: Usuario){
    let params = JSON.stringify(usuario);
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
    let obj = this.clienteHttp.post("http://127.0.0.1:4000/api/usuarios/login", params, {headers: headers});
    console.log(obj)
  }
}