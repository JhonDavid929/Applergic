import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduccion',
  templateUrl: './introduccion.component.html',
  styleUrls: ['./introduccion.component.css']
})
export class IntroduccionComponent implements OnInit {

  private readonly ACTIVE_CLASS = 'active';
  private currentIndex = 0;
  public slides = [
    {
      image: 'assets/imagenes/intro/scan2.png',
      description: '¡Bienvenido a Applergic.\nEscanea el código de barras de tu producto y Applergic te  dirá si es apto para ti.'
    },
    {
      image: 'assets/imagenes/intro/rectangle.png',
      description: 'LLeva tu Diario de compras y actividades.'
    },
    {
      image: 'assets/imagenes/intro/ambulancia.png',
      description: 'En caso de emergencia nos pondremos en contacto con la persona que nos digas.'
    },
    {
      image: 'assets/imagenes/intro/traduccioN.png',
      description: 'Viaja a donde quieras. Tendrás a tu disposición un traductor off-line y tu informe de alergias e intolerancias traducido al idioma local.'
    }
  ];

  constructor(
  ) { }

  ngOnInit() {
  }

  getActiveClass(index: number) {
    return {
      [this.ACTIVE_CLASS]: index === this.currentIndex
    };
  }

  goNextSlide() {
    this.currentIndex++;
  }
}
