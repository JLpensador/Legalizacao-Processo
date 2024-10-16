import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuntaComercialComponent } from './junta-comercial.component';

describe('JuntaComercialComponent', () => {
  let component: JuntaComercialComponent;
  let fixture: ComponentFixture<JuntaComercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JuntaComercialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuntaComercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
