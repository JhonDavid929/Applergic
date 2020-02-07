import { Component, OnInit } from '@angular/core';
import { Alimento } from '../../entidades/alimento';
import { AlergiasService } from '../../servicios/alergias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracion-alergias',
  templateUrl: './configuracion-alergias.component.html',
  styleUrls: ['./configuracion-alergias.component.css']
})
export class ConfiguracionAlergiasComponent implements OnInit {

  private readonly SELECTED_CLASS = 'selected';
  public allergyLetters: string[];
  public foodObjects = {};
  public allergyStatus = {};

  constructor(
    private router: Router,
    private alergiasService: AlergiasService
  ) {}

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
          this.allergyStatus[letter].foods[food.nombre] = !!this.alergiasService.getSelectedAlergies()[food.nombre];
          this.setLetterStatus(letter);
        });
      });
    });
  }

  toggleAllergyStatus(letter: string, foodName: string) {
    const currentStatus = this.allergyStatus[letter].foods[foodName];

    this.allergyStatus[letter].foods[foodName] = !currentStatus ?
      this.alergiasService.insertSelectedAlergy(foodName) :
      this.alergiasService.removeSelectedAlergy(foodName);

    this.setLetterStatus(letter);

    console.log('EstadoActual', this.allergyStatus);
  }

  setLetterStatus(letter: string) {
    this.allergyStatus[letter].letterStatus = !Object.keys(this.allergyStatus[letter].foods).every((name: string) => {
      return !this.allergyStatus[letter].foods[name];
    });
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

  hasSelectedAlergies() {
    return Object.keys(this.alergiasService.getSelectedAlergies()).length > 0;
  }

  goToConfirmAllergies() {
    this.router.navigate(['/confirmacion-alergias']);
  }
}

