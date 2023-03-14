import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyCustomerDetailsComponent } from './survey-customer-details.component';

describe('SurveyCustomerDetailsComponent', () => {
  let component: SurveyCustomerDetailsComponent;
  let fixture: ComponentFixture<SurveyCustomerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyCustomerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyCustomerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
