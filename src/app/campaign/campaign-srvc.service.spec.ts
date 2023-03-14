import { TestBed } from '@angular/core/testing';

import { CampaignSrvcService } from './campaign-srvc.service';

describe('CampaignSrvcService', () => {
  let service: CampaignSrvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampaignSrvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
