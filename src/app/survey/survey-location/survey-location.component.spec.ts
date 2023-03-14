import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyLocationComponent } from './survey-location.component';

describe('SurveyLocationComponent', () => {
  let component: SurveyLocationComponent;
  let fixture: ComponentFixture<SurveyLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
