import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionAlergiasComponent } from './configuracion-alergias.component';

describe('ConfiguracionAlergiasComponent', () => {
  let component: ConfiguracionAlergiasComponent;
  let fixture: ComponentFixture<ConfiguracionAlergiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracionAlergiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionAlergiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
