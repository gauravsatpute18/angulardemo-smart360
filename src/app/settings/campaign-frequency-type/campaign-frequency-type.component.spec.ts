import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignFrequencyTypeComponent } from './campaign-frequency-type.component';

describe('CampaignFrequencyTypeComponent', () => {
  let component: CampaignFrequencyTypeComponent;
  let fixture: ComponentFixture<CampaignFrequencyTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignFrequencyTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignFrequencyTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
