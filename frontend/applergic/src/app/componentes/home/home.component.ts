import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/entidades/usuario';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public usuarioLogado: Usuario;

  constructor(private router: Router) {

  }

  ngOnInit() {
    let user = JSON.parse(sessionStorage.getItem("usuario"));
    //console.log(user.nombre)
    this.usuarioLogado = JSON.parse(sessionStorage.getItem("usuario"))
    console.log(this.usuarioLogado)
  }

  logOut(){
    sessionStorage.removeItem("usuario");
    if(typeof sessionStorage.removeItem("usuario") === undefined){
      console.log("Bye bye");
    }
    this.router.navigate(['/inicio']);
  }

}
