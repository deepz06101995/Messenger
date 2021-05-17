import { TestBed } from '@angular/core/testing';

import { CustumhttpserviceService } from './custumhttpservice.service';

describe('CustumhttpserviceService', () => {
  let service: CustumhttpserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustumhttpserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
