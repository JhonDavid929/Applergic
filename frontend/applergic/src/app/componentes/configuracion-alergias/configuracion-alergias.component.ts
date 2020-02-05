import { Component, OnInit } from '@angular/core';
import { Alimento } from '../../entidades/alimento';
import { AlergiasService } from '../../servicios/alergias.service';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/entidades/usuario';

@Component({
  selector: 'app-configuracion-alergias',
  templateUrl: './configuracion-alergias.component.html',
  styleUrls: ['./configuracion-alergias.component.css']
})
export class ConfiguracionAlergiasComponent implements OnInit {

  public allergyLetters: string[];
  public foodObjects = {};
  public selectedButton: boolean;

  constructor(
    private alergiasService: AlergiasService
  ) {
    this.selectedButton = false;
  }

  ngOnInit() {
    this.allergyLetters = this.alergiasService.getAllergyLetters();
    console.log('Allergy letters: ', this.allergyLetters);
    this.allergyLetters.forEach((letter: string) => {
      this.foodObjects[letter] = this.alergiasService.getFoods(letter);
    });
  }

  deselectAllergy(id, cond) {
    if (this.selectedButton === true) {
      document.getElementById(id).style.color = 'rgb(168, 168, 168)';
      document.getElementById(id).style.background = 'rgb(255, 255, 255)';
    }
  }
  selectAllergy(id, cond) {
    if (this.selectedButton === false) {
      const letterId = id.charAt(0);
      console.log(letterId);
      document.getElementById(id).style.color = 'rgb(255, 255, 255)';
      document.getElementById(id).style.background = 'rgb(248, 73, 113)';
      const element0: HTMLScriptElement = document.getElementsByClassName(letterId)[0] as HTMLScriptElement;
      element0.style.background = 'rgb(248, 73, 113)';
      const element1: HTMLScriptElement = document.getElementsByClassName(letterId)[1] as HTMLScriptElement;
      element1.style.background = 'rgb(248, 73, 113)';
      this.selectedButton = true;
    }
  }
}

