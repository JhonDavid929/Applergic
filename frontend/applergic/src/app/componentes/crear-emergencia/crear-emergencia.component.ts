import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from '../../entidades/usuario';
import { Emergencia } from '../../entidades/emergencia';

@Component({
  selector: 'app-crear-emergencia',
  templateUrl: './crear-emergencia.component.html',
  styleUrls: ['./crear-emergencia.component.css']
})


export class CrearEmergenciaComponent implements OnInit {

  titulo: string = "Vamos a añadir tu contacto en caso de emergencia.";
  public emergenciaNueva: Emergencia;
  valido: boolean;


  constructor() { 
    this.valido = false;
    this.emergenciaNueva = new Emergencia()


  }

  ngOnInit() {
  }
  onSubmit(form) {
    console.log("evento submit lanzado");
    console.log(this.emergenciaNueva);
    form.reset();
  }

  alPerderFoco() {
    if ( typeof this.emergenciaNueva.nombre !== "undefined"
        && this.emergenciaNueva.nombre !== "") {
          this.valido = true;
        }
  }

}
