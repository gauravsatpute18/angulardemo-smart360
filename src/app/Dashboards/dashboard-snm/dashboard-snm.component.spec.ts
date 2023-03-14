import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSnmComponent } from './dashboard-snm.component';

describe('DashboardSnmComponent', () => {
  let component: DashboardSnmComponent;
  let fixture: ComponentFixture<DashboardSnmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSnmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSnmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
