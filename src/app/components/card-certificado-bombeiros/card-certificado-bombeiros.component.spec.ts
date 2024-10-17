import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCertificadoBombeirosComponent } from './card-certificado-bombeiros.component';

describe('CardCertificadoBombeirosComponent', () => {
  let component: CardCertificadoBombeirosComponent;
  let fixture: ComponentFixture<CardCertificadoBombeirosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardCertificadoBombeirosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCertificadoBombeirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
