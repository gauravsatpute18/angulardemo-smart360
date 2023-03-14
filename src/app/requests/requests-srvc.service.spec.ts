import { TestBed } from '@angular/core/testing';

import { RequestsSrvcService } from './requests-srvc.service';

describe('RequestsSrvcService', () => {
  let service: RequestsSrvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestsSrvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
