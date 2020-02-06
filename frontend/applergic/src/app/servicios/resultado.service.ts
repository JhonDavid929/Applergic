import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ResultadoService {

  constructor(private http: HttpClient, private router: Router) { }

  getProducto(codigo: string, callback: any) {
    const obj = this.http.get<any>(`http://127.0.0.1:4000/api/productos/${codigo}`);
    obj.subscribe(datos => {
      if (datos.mensaje === 'Si') {
        callback(datos.producto);
        this.router.navigate(['escaneo']);
      } else {
        alert(datos.mensaje);
      }
    });
  }
}
