import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alimento } from '../entidades/alimento';

@Injectable({
  providedIn: 'root'
})
export class AlergiasService {

  private readonly ALLERGY_LETTERS = ['A', 'C', 'F', 'G', 'H', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'U', 'V', 'Y'];
  private selectedAlergies = {};

  constructor(
    private http: HttpClient
  ) { }

  getFoods(letter: string) {
    return this.http.get('http://127.0.0.1:4000/api/alimentos/' + letter);
  }

  getAllergyLetters() {
    return this.ALLERGY_LETTERS;
  }

  getSelectedAlergies() {
    return this.selectedAlergies;
  }

  insertSelectedAlergy(foodName: string) {
    // TOOD: myObj[xxx] = true
  }

  removeSelectedAlergy(foodName: string) {
    // TODO: delete myObj[xxx]
  }
}
