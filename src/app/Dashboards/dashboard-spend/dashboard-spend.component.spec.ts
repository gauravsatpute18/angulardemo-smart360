import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSpendComponent } from './dashboard-spend.component';

describe('DashboardSpendComponent', () => {
  let component: DashboardSpendComponent;
  let fixture: ComponentFixture<DashboardSpendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSpendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSpendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
