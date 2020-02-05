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

  private readonly SELECTED_CLASS = 'selected';
  public allergyLetters: string[];
  public foodObjects = {};
  public selectedButton: boolean;
  public allergyStatus = {};

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

      // Creacion del estado para letra actual y objeto con los estados de cada elemento
      this.allergyStatus[letter] = {
        letterStatus: false,
        foods: {}
      };
      // Crear estados de cada alimento para letra actual
      this.foodObjects[letter].subscribe((foods: Alimento[]) => {
        foods.forEach((food: Alimento) => {
          this.allergyStatus[letter].foods[food.nombre] = false;
        });
      });
    });
  }

  toggleAllergyStatus(letter: string, foodName: string) {
    const currentStatus = this.allergyStatus[letter].foods[foodName];

    this.allergyStatus[letter].foods[foodName] = !currentStatus;

    this.allergyStatus[letter].letterStatus = !Object.keys(this.allergyStatus[letter].foods).every((foodName: string) => {
      return !this.allergyStatus[letter].foods[foodName];
    });
    console.log('EstadoActual', this.allergyStatus);
  }

  getLetterClass(letter: string) {
    return {
      [this.SELECTED_CLASS]: this.allergyStatus[letter].letterStatus
    };
  }

  getFoodClass(letter: string, foodName: string) {
    return {
      [this.SELECTED_CLASS]: this.allergyStatus[letter].foods[foodName]
    };
  }
}

