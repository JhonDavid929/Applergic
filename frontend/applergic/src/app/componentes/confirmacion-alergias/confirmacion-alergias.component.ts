import { Component, OnInit } from '@angular/core';
import { AlergiasService } from '../../servicios/alergias.service';
import { Usuario } from '../../entidades/usuario';

@Component({
  selector: 'app-confirmacion-alergias',
  templateUrl: './confirmacion-alergias.component.html',
  styleUrls: ['./confirmacion-alergias.component.css']
})
export class ConfirmacionAlergiasComponent implements OnInit {

  public allergies: string[];
  public user: Usuario;

  constructor(
    private alergiasService: AlergiasService
  ) {
  }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem("usuario"));
    console.log(this.user);
    this.allergies = Object.keys(this.alergiasService.getSelectedAlergies());
  }

  saveAllergies(){
    
  }
}
