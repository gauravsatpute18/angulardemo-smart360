import { TestBed } from '@angular/core/testing';

import { LoginlogoutSrvcService } from './loginlogout-srvc.service';

describe('LoginlogoutSrvcService', () => {
  let service: LoginlogoutSrvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginlogoutSrvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
