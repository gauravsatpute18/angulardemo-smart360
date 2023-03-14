import { TestBed } from '@angular/core/testing';

import { DispatcherSrvcService } from './dispatcher-srvc.service';

describe('DispatcherSrvcService', () => {
  let service: DispatcherSrvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DispatcherSrvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
