import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyLocationDetailsComponent } from './survey-location-details.component';

describe('SurveyLocationDetailsComponent', () => {
  let component: SurveyLocationDetailsComponent;
  let fixture: ComponentFixture<SurveyLocationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyLocationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyLocationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
