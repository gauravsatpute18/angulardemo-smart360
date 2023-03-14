import { TestBed } from '@angular/core/testing';

import { PaymentSrvcService } from './payment-srvc.service';

describe('PaymentSrvcService', () => {
  let service: PaymentSrvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentSrvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
