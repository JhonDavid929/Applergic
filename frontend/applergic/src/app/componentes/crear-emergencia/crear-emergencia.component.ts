import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { Usuario } from '../../entidades/usuario';
import { PersonaEmergenciaServicio } from '../../servicios/personaEmergenciaServicio';
import { PersonaEmergencia } from '../../entidades/personaEmergencia';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-emergencia',
  templateUrl: './crear-emergencia.component.html',
  styleUrls: ['./crear-emergencia.component.css']
})

export class CrearEmergenciaComponent implements OnInit {

  titulo: string = "Vamos a añadir tu contacto en caso de emergencia.";
  public personaEmergencia: PersonaEmergencia;
  valido: boolean;


  constructor(private emergenciaServicio: PersonaEmergenciaServicio, private router: Router) { 
    this.valido = false;
    this.personaEmergencia = {
      nombre: "",
      email: "",
      movil: "",
      compania: "",
      poliza: ""
    }
  }

  ngOnInit() {
  }

  onSubmit(form) {
    this.emergenciaServicio.crearPersona(this.personaEmergencia);
    console.log(this.personaEmergencia);
    this.router.navigate(['alergias']);
  }

  alPerderFoco() {
    if ( typeof this.personaEmergencia.nombre !== "undefined"
        && this.personaEmergencia.nombre !== "") {
          this.valido = true;
        }
  }

}
