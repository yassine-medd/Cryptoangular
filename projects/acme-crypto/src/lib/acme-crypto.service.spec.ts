import { TestBed } from '@angular/core/testing';

import { AcmeCryptoService } from './acme-crypto.service';

describe('AcmeCryptoService', () => {
  let service: AcmeCryptoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcmeCryptoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
