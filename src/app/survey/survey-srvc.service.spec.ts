import { TestBed } from '@angular/core/testing';

import { SurveySrvcService } from './survey-srvc.service';

describe('SurveySrvcService', () => {
  let service: SurveySrvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveySrvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
