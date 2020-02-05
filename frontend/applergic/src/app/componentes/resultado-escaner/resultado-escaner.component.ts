import { Component, OnInit } from '@angular/core';
import { ResultadoServicio } from '../../servicios/resultadoServicio';
import { Producto } from '../../entidades/producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultado-escaner',
  templateUrl: './resultado-escaner.component.html',
  styleUrls: ['./resultado-escaner.component.css']
})

export class ResultadoEscanerComponent implements OnInit {

  public producto: Producto;

  constructor(private resultadoServicio: ResultadoServicio, private router: Router) {
    this.producto = {
      nombre: "",
      ingredientes: [],
      codigoBarras: "",
      imagen: ""
    }
  }

  ngOnInit() {
    this.producto = JSON.parse(sessionStorage.getItem("producto"))
  }

  redirigir(){
    this.router.navigate(['escaner']);
  }

}
