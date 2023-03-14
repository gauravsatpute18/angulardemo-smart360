import { TestBed } from '@angular/core/testing';

import { StoreSrvcService } from './store-srvc.service';

describe('StoreSrvcService', () => {
  let service: StoreSrvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreSrvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
