import { TestBed } from '@angular/core/testing';

import { CRMService } from './crm.service';

describe('CRMService', () => {
  let service: CRMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CRMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
