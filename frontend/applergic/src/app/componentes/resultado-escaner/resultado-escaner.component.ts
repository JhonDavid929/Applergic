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
    this.producto = JSON.parse(sessionStorage.getItem("producto"))
    
  }

  ngOnInit() {
    let vista1 = document.getElementById("vista1");
    let vista2 = document.getElementById("vista2");
    let vista3 = document.getElementById("vista3");
    console.log(this.producto.ingredientes)
    this.pintarVistas();
  }

  redirigir(){
    this.router.navigate(['escaner']);
  }

  pintarVistas(){
    let vista1 = document.getElementById("vista1");
    let vista2 = document.getElementById("vista2");
    let vista3 = document.getElementById("vista3");

    if(this.producto.ingredientes.length === 0){
      vista2.style.display = "none";
      vista3.style.display = "none";
    } else if(this.producto.ingredientes){
      vista1.style.display = "none";
      vista3.style.display = "none";
    }else{
      vista1.style.display = "none";
      vista2.style.display = "none";
    }
  }
}
