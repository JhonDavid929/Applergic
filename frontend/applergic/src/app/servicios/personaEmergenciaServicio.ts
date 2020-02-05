import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PersonaEmergencia } from '../entidades/personaEmergencia';

@Injectable({
  providedIn: 'root'
})

export class PersonaEmergenciaServicio {

    constructor(
        private http: HttpClient
    ) { }

    crearPersona(personaEmergencia: PersonaEmergencia){
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
        let persona = this.http.post("http://127.0.0.1:4000/api/emergencias/registro", personaEmergencia, {headers: headers}).subscribe(
            response => {
            console.log(response);
            },
            error => {
            console.log(error);
            }
        )
        console.log(persona)
        return persona;
    }
}
