import { TestBed } from '@angular/core/testing';

import { JuntaComercialService } from './junta-comercial.service';

describe('JuntaComercialService', () => {
  let service: JuntaComercialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JuntaComercialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
