import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/entidades/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public usuarioLogado;

  constructor() { 
 
  }

  ngOnInit() {
    let user = JSON.parse(sessionStorage.getItem("usuario"));
    console.log(user.nombre)
    this.usuarioLogado = JSON.parse(sessionStorage.getItem("usuario"))
  }

}
