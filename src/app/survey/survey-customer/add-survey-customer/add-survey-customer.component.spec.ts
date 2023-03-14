import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSurveyCustomerComponent } from './add-survey-customer.component';

describe('AddSurveyCustomerComponent', () => {
  let component: AddSurveyCustomerComponent;
  let fixture: ComponentFixture<AddSurveyCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSurveyCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSurveyCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
