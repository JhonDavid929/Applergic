import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../entidades/producto';

@Injectable({
    providedIn: 'root'
  })

export class ResultadoServicio{

    constructor(private http: HttpClient){}

    getProducto(codigo){
        let obj = this.http.get(`http://127.0.0.1:4000/api/productos/${codigo}`);
        return obj;
    }
}

