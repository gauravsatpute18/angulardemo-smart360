import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWorkOrderComponent } from './dashboard-work-order.component';

describe('DashboardWorkOrderComponent', () => {
  let component: DashboardWorkOrderComponent;
  let fixture: ComponentFixture<DashboardWorkOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardWorkOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardWorkOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
