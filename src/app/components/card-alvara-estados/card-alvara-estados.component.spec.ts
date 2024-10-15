import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAlvaraEstadosComponent } from './card-alvara-estados.component';

describe('CardAlvaraEstadosComponent', () => {
  let component: CardAlvaraEstadosComponent;
  let fixture: ComponentFixture<CardAlvaraEstadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardAlvaraEstadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAlvaraEstadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
