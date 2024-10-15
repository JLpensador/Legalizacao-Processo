import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCRMEstadosComponent } from './card-crm-estados.component';

describe('CardCRMEstadosComponent', () => {
  let component: CardCRMEstadosComponent;
  let fixture: ComponentFixture<CardCRMEstadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardCRMEstadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCRMEstadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
