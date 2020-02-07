import { Component, OnInit } from '@angular/core';
import { PersonaEmergenciaServicio } from '../../servicios/personaEmergenciaServicio';
import { PersonaEmergencia } from '../../entidades/personaEmergencia';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/entidades/usuario';

@Component({
  selector: 'app-crear-emergencia',
  templateUrl: './crear-emergencia.component.html',
  styleUrls: ['./crear-emergencia.component.css']
})

export class CrearEmergenciaComponent implements OnInit {

  titulo: string = "Vamos a añadir tu contacto en caso de emergencia.";
  public personaEmergencia;
  valido: boolean;
  public usuarioRegistrado;


  constructor(private emergenciaServicio: PersonaEmergenciaServicio, private router: Router) { 
    this.valido = false;
    this.personaEmergencia = {
      usuario: "",
      nombre: "",
      email: "",
      movil: "",
      compania: "",
      poliza: ""
    }
    this.usuarioRegistrado = ""
  }

  ngOnInit() {
  }

  onSubmit(form) {
    this.usuarioRegistrado = JSON.parse(sessionStorage.getItem("user"))
    console.log(this.usuarioRegistrado.usuario)
    this.personaEmergencia.usuario = this.usuarioRegistrado.usuario;
    this.emergenciaServicio.crearPersona(this.personaEmergencia);
    this.router.navigate(['alergias']);
  }

  alPerderFoco() {
    if ( typeof this.personaEmergencia.nombre !== "undefined"
        && this.personaEmergencia.nombre !== "") {
          this.valido = true;
        }
  }

}