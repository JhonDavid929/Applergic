import { Component, OnInit } from '@angular/core';
import { AlergiasService } from '../../servicios/alergias.service';

@Component({
  selector: 'app-confirmacion-alergias',
  templateUrl: './confirmacion-alergias.component.html',
  styleUrls: ['./confirmacion-alergias.component.css']
})
export class ConfirmacionAlergiasComponent implements OnInit {

  public allergies: string[];
  constructor(
    private alergiasService: AlergiasService
  ) {
  }

  ngOnInit() {
    this.allergies = Object.keys(this.alergiasService.getSelectedAlergies());
  }
}
