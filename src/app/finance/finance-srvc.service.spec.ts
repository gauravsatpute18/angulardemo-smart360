import { TestBed } from '@angular/core/testing';

import { FinanceSrvcService } from './finance-srvc.service';

describe('FinanceSrvcService', () => {
  let service: FinanceSrvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinanceSrvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
