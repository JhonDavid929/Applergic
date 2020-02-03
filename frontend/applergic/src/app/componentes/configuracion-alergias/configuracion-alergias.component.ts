import { Component, OnInit } from '@angular/core';
import { Alimento } from '../../entidades/alimento';
import { AlergiasService } from '../../servicios/alergias.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-configuracion-alergias',
  templateUrl: './configuracion-alergias.component.html',
  styleUrls: ['./configuracion-alergias.component.css']
})
export class ConfiguracionAlergiasComponent implements OnInit {

  public allergyLetters: string[];
  public foodObjects = {};

  constructor(
    private alergiasService: AlergiasService
  ) {
  }

  ngOnInit() {
    this.allergyLetters = this.alergiasService.getAllergyLetters();
    console.log('Allergy letters: ', this.allergyLetters);
    this.allergyLetters.forEach((letter: string) => {
      this.foodObjects[letter] = this.alergiasService.getFoods(letter);
    });
  }
}
