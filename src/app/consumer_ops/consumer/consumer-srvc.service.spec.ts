import { TestBed } from '@angular/core/testing';

import { ConsumerSrvcService } from './consumer-srvc.service';

describe('ConsumerSrvcService', () => {
  let service: ConsumerSrvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumerSrvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
