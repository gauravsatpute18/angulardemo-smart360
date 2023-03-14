import { TestBed } from '@angular/core/testing';

import { ServicescomponentSrvcService } from './servicescomponent-srvc.service';

describe('ServicescomponentSrvcService', () => {
  let service: ServicescomponentSrvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicescomponentSrvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
