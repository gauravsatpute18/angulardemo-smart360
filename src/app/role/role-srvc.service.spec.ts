import { TestBed } from '@angular/core/testing';

import { RoleSrvcService } from './role-srvc.service';

describe('RoleSrvcService', () => {
  let service: RoleSrvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleSrvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
