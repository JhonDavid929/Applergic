import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionAlergiasComponent } from './confirmacion-alergias.component';

describe('ConfirmacionAlergiasComponent', () => {
  let component: ConfirmacionAlergiasComponent;
  let fixture: ComponentFixture<ConfirmacionAlergiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmacionAlergiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacionAlergiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
