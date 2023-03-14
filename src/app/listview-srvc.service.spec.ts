import { TestBed } from '@angular/core/testing';

import { ListviewSrvcService } from './listview-srvc.service';

describe('ListviewSrvcService', () => {
  let service: ListviewSrvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListviewSrvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
