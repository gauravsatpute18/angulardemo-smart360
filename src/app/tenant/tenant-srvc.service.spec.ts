import { TestBed } from '@angular/core/testing';

import { TenantSrvcService } from './tenant-srvc.service';

describe('TenantSrvcService', () => {
  let service: TenantSrvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TenantSrvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
