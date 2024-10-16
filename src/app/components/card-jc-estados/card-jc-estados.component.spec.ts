import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardJCEstadosComponent } from './card-jc-estados.component';

describe('CardJCEstadosComponent', () => {
  let component: CardJCEstadosComponent;
  let fixture: ComponentFixture<CardJCEstadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardJCEstadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardJCEstadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
