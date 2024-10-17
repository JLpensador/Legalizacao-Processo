import { TestBed } from '@angular/core/testing';

import { CertificadoService } from './certificado.service';

describe('CertificadoService', () => {
  let service: CertificadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertificadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
