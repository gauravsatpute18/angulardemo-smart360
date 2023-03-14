import { TestBed } from '@angular/core/testing';

import { AssetsSrvcService } from './assets-srvc.service';

describe('AssetsSrvcService', () => {
  let service: AssetsSrvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetsSrvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
