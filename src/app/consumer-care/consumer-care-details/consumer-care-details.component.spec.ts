import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerCareDetailsComponent } from './consumer-care-details.component';

describe('ConsumerCareDetailsComponent', () => {
  let component: ConsumerCareDetailsComponent;
  let fixture: ComponentFixture<ConsumerCareDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerCareDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerCareDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
