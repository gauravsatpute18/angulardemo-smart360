import { TestBed } from '@angular/core/testing';

import { UsersSrvcService } from './users-srvc.service';

describe('UsersSrvcService', () => {
  let service: UsersSrvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersSrvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
