import { Component, OnInit } from '@angular/core';
import { AlergiasService } from '../../servicios/alergias.service';
import { UsuarioServicio } from '../../servicios/usuarioServicio';
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
    private alergiasService: AlergiasService, private usuarioServicio: UsuarioServicio
  ) {
      this.user = JSON.parse(sessionStorage.getItem("usuario"));
  }

  ngOnInit() {
    console.log(this.user);
    this.allergies = Object.keys(this.alergiasService.getSelectedAlergies());
  }

  saveAllergies(){
    this.user.alimentos = this.user.alimentos.concat(this.allergies);
    this.usuarioServicio.insertarAlimentos(this.user["_id"], this.user);
    console.log(this.user)
  }
}
