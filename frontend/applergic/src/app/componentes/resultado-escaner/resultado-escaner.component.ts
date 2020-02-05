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
  apto: boolean;

  constructor(private resultadoServicio: ResultadoServicio, private router: Router) {
    this.producto = {
      nombre: "",
      ingredientes: [],
      codigoBarras: "",
      imagen: ""
    }
  }

  ngOnInit() {
    console.log(JSON.parse(sessionStorage.getItem("producto")))
    let vista1 = document.getElementById("vista1");
    let vista2 = document.getElementById("vista2");
    let vista3 = document.getElementById("vista3");
    let prod = JSON.parse(sessionStorage.getItem("product"));
    console.log(prod.ingredientes)
    // let usu = JSON.parse(sessionStorage.getItem("usuario"));
    // console.log(usu.alimentos)

    if(prod.ingredientes.length === 0){
      vista2.style.display = "none";
      vista3.style.display = "none";
    } else if(prod.ingredientes){
      vista1.style.display = "none";
      vista3.style.display = "none";
    }else{
      vista1.style.display = "none";
      vista2.style.display = "none";
    }
  }

  redirigir(){
    this.router.navigate(['escaner']);
  }

  pintarVistas(){
    let vista1 = document.getElementById("vista1");
    let vista2 = document.getElementById("vista2");
    let vista3 = document.getElementById("vista3");
    let apto = false;
    let prod = JSON.parse(sessionStorage.getItem("product"));
    console.log(prod.ingredientes)
    let usu = JSON.parse(sessionStorage.getItem("usuario"));
    console.log(usu.alimentos)
    if(prod.ingredientes){
      vista2.style.display = "none";
      vista3.style.display = "none";
    }
    
  }
}
