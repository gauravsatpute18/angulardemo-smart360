import { TestBed } from '@angular/core/testing';

import { ContractSrvcService } from './contract-srvc.service';

describe('ContractSrvcService', () => {
  let service: ContractSrvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContractSrvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
