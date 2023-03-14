import { TestBed } from '@angular/core/testing';

import { UtilitySrvcService } from './utility-srvc.service';

describe('UtilitySrvcService', () => {
  let service: UtilitySrvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilitySrvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
