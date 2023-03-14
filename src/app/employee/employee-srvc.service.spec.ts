import { TestBed } from '@angular/core/testing';

import { EmployeeSrvcService } from './employee-srvc.service';

describe('EmployeeSrvcService', () => {
  let service: EmployeeSrvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeSrvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
