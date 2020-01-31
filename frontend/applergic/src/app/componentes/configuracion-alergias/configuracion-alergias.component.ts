import { Component, OnInit } from '@angular/core';
import { Alimento } from '../../entidades/alimento';

@Component({
  selector: 'app-configuracion-alergias',
  templateUrl: './configuracion-alergias.component.html',
  styleUrls: ['./configuracion-alergias.component.css']
})
export class ConfiguracionAlergiasComponent implements OnInit {

  listaDeAlimentos: Alimento[];

  constructor() { }

  ngOnInit() {
  }

}
