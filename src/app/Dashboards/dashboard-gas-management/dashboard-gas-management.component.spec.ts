import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGasManagementComponent } from './dashboard-gas-management.component';

describe('DashboardGasManagementComponent', () => {
  let component: DashboardGasManagementComponent;
  let fixture: ComponentFixture<DashboardGasManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardGasManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardGasManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
