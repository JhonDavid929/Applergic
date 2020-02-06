import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/entidades/producto';
import { ResultadoService } from '../../servicios/resultado.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  public producto: Producto;

  public productViews = [
    {
      description: 'Este producto es apto para ti.',
      image: 'assets/imagenes/resultado/nesquik.png',
      fabricante: 'Nestle'
    },
    {
      description: 'Este producto NO es apto para ti, contiene uva.',
      image: 'assets/imagenes/resultado/vino.png',
      fabricante: 'Bodega Matarromera'
    },
    {
      description: 'Lo sentimos, no hay datos suficientes para poder valorar este producto.',
      image: 'assets/imagenes/resultado/megasurtidobrillo111.png',
      fabricante: 'Vidal',
    }
  ];
  constructor(private resultadoService: ResultadoService) {
    this.producto = JSON.parse(sessionStorage.getItem('producto'))
  }

  ngOnInit() {
  }

}
