import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoBombeirosComponent } from './certificado-bombeiros.component';

describe('CertificadoBombeirosComponent', () => {
  let component: CertificadoBombeirosComponent;
  let fixture: ComponentFixture<CertificadoBombeirosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CertificadoBombeirosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificadoBombeirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
