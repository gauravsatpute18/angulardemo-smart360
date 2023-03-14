import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderConfigComponent } from './work-order-config.component';

describe('WorkOrderConfigComponent', () => {
  let component: WorkOrderConfigComponent;
  let fixture: ComponentFixture<WorkOrderConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkOrderConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkOrderConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
