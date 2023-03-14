import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardConsumerCareComponent } from './dashboard-consumer-care.component';

describe('DashboardConsumerCareComponent', () => {
  let component: DashboardConsumerCareComponent;
  let fixture: ComponentFixture<DashboardConsumerCareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardConsumerCareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardConsumerCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
