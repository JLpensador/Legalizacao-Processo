import { TestBed } from '@angular/core/testing';

import { AlvarásService } from './alvarás.service';

describe('AlvarásService', () => {
  let service: AlvarásService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlvarásService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
