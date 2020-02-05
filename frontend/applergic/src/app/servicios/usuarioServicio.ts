import { Injectable } from '@angular/core';
import { Usuario } from '../entidades/usuario';
import { MensajeServicio } from './mensajeServicio';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UsuarioServicio {
    
  constructor(private clienteHttp: HttpClient, private mensaje: MensajeServicio, private router: Router) {
    
  }

  crearUsuario(usuario: Usuario){
    let params = JSON.stringify(usuario);
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
    let user = this.clienteHttp.post("http://127.0.0.1:4000/api/usuarios/registro", params, {headers: headers}).subscribe(
      response => {
        console.log(response);
        sessionStorage.setItem("user", JSON.stringify(response));
      },
      error => {
        console.log(error);
      }
    )
    console.log(user)
    return user;
  }

  logIn(usuario: Usuario){
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
    let obj = this.clienteHttp.post<any>("http://127.0.0.1:4000/api/usuarios/login", usuario, {headers: headers});
    obj.subscribe(datos =>{

      if(datos.valido === "incorrecto"){
        alert(datos.valido);
      }else{
        sessionStorage.setItem("usuario", JSON.stringify(datos.usuario))
        this.router.navigate(['home']);
      }
    })
  }
}