import { TestBed } from '@angular/core/testing';

import { ApplicantdetailsSrvcService } from './applicantdetails-srvc.service';

describe('ApplicantdetailsSrvcService', () => {
  let service: ApplicantdetailsSrvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicantdetailsSrvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
