import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyCustomerComponent } from './survey-customer.component';

describe('SurveyCustomerComponent', () => {
  let component: SurveyCustomerComponent;
  let fixture: ComponentFixture<SurveyCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
