import { TestBed } from '@angular/core/testing';

import { TenderSrvcService } from './tender-srvc.service';

describe('TenderSrvcService', () => {
  let service: TenderSrvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TenderSrvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
