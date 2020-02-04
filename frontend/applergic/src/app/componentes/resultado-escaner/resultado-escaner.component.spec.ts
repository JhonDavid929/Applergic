import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoEscanerComponent } from './resultado-escaner.component';

describe('ResultadoEscanerComponent', () => {
  let component: ResultadoEscanerComponent;
  let fixture: ComponentFixture<ResultadoEscanerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadoEscanerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoEscanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
