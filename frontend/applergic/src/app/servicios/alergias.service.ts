import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alimento } from '../entidades/alimento';

@Injectable({
  providedIn: 'root'
})
export class AlergiasService {

  private readonly ALLERGY_LETTERS = ['A', 'C', 'F', 'G', 'H', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'U', 'V', 'Y']

  constructor(
    private http: HttpClient
  ) { }

  getFoods(letter: string) {
    return this.http.get('http://127.0.0.1:4000/api/usuarios/alimentos/' + letter);
  }

  getAllergyLetters() {
    return this.ALLERGY_LETTERS;
  }
}
