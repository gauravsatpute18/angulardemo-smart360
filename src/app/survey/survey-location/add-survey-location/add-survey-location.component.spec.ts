import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSurveyLocationComponent } from './add-survey-location.component';

describe('AddSurveyLocationComponent', () => {
  let component: AddSurveyLocationComponent;
  let fixture: ComponentFixture<AddSurveyLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSurveyLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSurveyLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
