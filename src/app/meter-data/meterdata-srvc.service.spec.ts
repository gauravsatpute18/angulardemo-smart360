import { TestBed } from '@angular/core/testing';

import { MeterdataSrvcService } from './meterdata-srvc.service';

describe('MeterdataSrvcService', () => {
  let service: MeterdataSrvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeterdataSrvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
