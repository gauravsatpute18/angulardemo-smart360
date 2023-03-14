import { TestBed } from '@angular/core/testing';

import { ReportsSrvcService } from './reports-srvc.service';

describe('ReportsSrvcService', () => {
  let service: ReportsSrvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportsSrvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
