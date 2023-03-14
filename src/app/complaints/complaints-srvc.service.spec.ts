import { TestBed } from '@angular/core/testing';

import { ComplaintsSrvcService } from './complaints-srvc.service';

describe('ComplaintsSrvcService', () => {
  let service: ComplaintsSrvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplaintsSrvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
