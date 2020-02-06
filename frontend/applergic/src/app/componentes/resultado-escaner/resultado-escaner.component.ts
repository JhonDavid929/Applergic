import { Component, OnInit } from '@angular/core';
import { ResultadoServicio } from '../../servicios/resultadoServicio';
import { Producto } from '../../entidades/producto';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/entidades/usuario';

@Component({
  selector: 'app-resultado-escaner',
  templateUrl: './resultado-escaner.component.html',
  styleUrls: ['./resultado-escaner.component.css']
})

export class ResultadoEscanerComponent implements OnInit {

  public producto: Producto;
  public user: Usuario;
  private vistaApto: Number;

  constructor(private resultadoServicio: ResultadoServicio, private router: Router) {
    this.producto = JSON.parse(sessionStorage.getItem("producto"))
    this.user = JSON.parse(sessionStorage.getItem("usuario"))
  }

  ngOnInit() {
    this.vistaApto = -1;
    this.pintarVistas();
  }

  redirigir() {
    this.router.navigate(['escaner']);
  }

  pintarVistas() {

    //let apto;
    //alert(this.producto.ingredientes.length);

    if ( !this.producto) {
      this.vistaApto = 3;
    } else {
      let existe = false;
      let arrayAlimUsuario = this.user.alimentos;
      let arrayProducto = this.producto.ingredientes;
      for (let i = 0; i < arrayAlimUsuario.length; i++) {
        if (arrayProducto.indexOf(arrayAlimUsuario[i]) >= 0) {
          existe = true;
        }
      }
      if (existe) {
        // Si no coincide ninguno, se puede comer
        this.vistaApto = 2;
      } else {
        // Si coincide alguno, NO se puede comer
        this.vistaApto = 1;
      }
    }
  }
}
