import { TestBed } from '@angular/core/testing';

import { SettingsSrvcService } from './settings-srvc.service';

describe('SettingsSrvcService', () => {
  let service: SettingsSrvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingsSrvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
