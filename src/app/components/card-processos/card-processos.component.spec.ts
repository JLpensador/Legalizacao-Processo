import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProcessosComponent } from './card-processos.component';

describe('CardProcessosComponent', () => {
  let component: CardProcessosComponent;
  let fixture: ComponentFixture<CardProcessosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardProcessosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProcessosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
