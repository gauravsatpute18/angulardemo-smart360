import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHcmComponent } from './dashboard-hcm.component';

describe('DashboardHcmComponent', () => {
  let component: DashboardHcmComponent;
  let fixture: ComponentFixture<DashboardHcmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardHcmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHcmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
