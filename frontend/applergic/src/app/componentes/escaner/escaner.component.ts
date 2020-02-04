import { Component, OnInit } from '@angular/core';
import { ResultadoServicio } from '../../servicios/resultadoServicio';
import { Producto } from 'src/app/entidades/producto';

@Component({
  selector: 'escaner',
  templateUrl: './escaner.component.html',
  styleUrls: ['./escaner.component.css']
})
export class EscanerComponent implements OnInit {

  public producto: Producto;

  constructor(private resultadoServicio: ResultadoServicio) {
    this.producto = {
      nombre: "",
      ingredientes: [],
      codigoBarras: "",
      imagen: ""
    }
  }

  ngOnInit() {
  }

  escanearProducto(form){
    this.resultadoServicio.getProducto(this.producto.codigoBarras, producto => {
      this.producto = producto;
    });
  }

}
