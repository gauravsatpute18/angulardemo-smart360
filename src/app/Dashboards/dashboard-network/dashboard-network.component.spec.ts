import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNetworkComponent } from './dashboard-network.component';

describe('DashboardNetworkComponent', () => {
  let component: DashboardNetworkComponent;
  let fixture: ComponentFixture<DashboardNetworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardNetworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
