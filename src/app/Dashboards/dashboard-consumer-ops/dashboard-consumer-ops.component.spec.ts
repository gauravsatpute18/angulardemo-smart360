import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardConsumerOpsComponent } from './dashboard-consumer-ops.component';

describe('DashboardConsumerOpsComponent', () => {
  let component: DashboardConsumerOpsComponent;
  let fixture: ComponentFixture<DashboardConsumerOpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardConsumerOpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardConsumerOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
