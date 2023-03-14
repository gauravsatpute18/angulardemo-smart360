import { TestBed } from '@angular/core/testing';

import { PayrollSrvcService } from './payroll-srvc.service';

describe('PayrollSrvcService', () => {
  let service: PayrollSrvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayrollSrvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
