import { TestBed } from '@angular/core/testing';

import { SupplierSrvcService } from './supplier-srvc.service';

describe('SupplierSrvcService', () => {
  let service: SupplierSrvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupplierSrvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
