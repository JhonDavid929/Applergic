import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lector-qr-nfc',
  templateUrl: './lector-qr-nfc.component.html',
  styleUrls: ['./lector-qr-nfc.component.css']
})
export class LectorQrNFCComponent implements OnInit {
  private readonly ACTIVE_CLASS = 'active';
  private currentIndex = 0;
  public slides = [
    {
      image: 'assets/imagenes/escaneo/captura_qr.png',
      description: 'Tan solo tienes que centrar el código QR del producto en el recuadro'

    },
    {
      image: 'assets/imagenes/escaneo/nfcTransmit@2x.png',
      description: 'Tansolo tienes que aproximar tu movil al símbolo NFC de la etiqueta digital del producto'

    }
  ];

  constructor() { }
  public cambiaColorQR: boolean = false;
  public cambiaColorNFC: boolean = true;

  ngOnInit() {
  }
  eventClick(){
    if (true) {
      this.currentIndex=0
      return true;
    }
  }
  eventClick2(){
    if (true) {
      this.currentIndex=1
      return true;
    }
  }
  onChangeClassQR(){
    this.cambiaColorQR= !this.cambiaColorQR
    return this.cambiaColorNFC=true;
  }
  onChangeClassNFC(){
    this.cambiaColorNFC= !this.cambiaColorNFC
    return this.cambiaColorQR=true;
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
