import { Component, OnInit } from '@angular/core';
import { ResultadoServicio } from '../../servicios/resultadoServicio';

@Component({
  selector: 'app-resultado-escaner',
  templateUrl: './resultado-escaner.component.html',
  styleUrls: ['./resultado-escaner.component.css']
})

export class ResultadoEscanerComponent implements OnInit {

  public producto: {};

  constructor(private resultadoServicio: ResultadoServicio) {
    this.producto = {
      nombre: "",
      ingredientes: [],
      codigo: ""
    }
  }

  ngOnInit() {
  }

  sacarProducto(){
    let producto = this.resultadoServicio.getProducto(this.producto);
    return producto;
  }

}
