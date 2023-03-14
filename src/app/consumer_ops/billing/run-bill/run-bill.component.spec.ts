import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunBillComponent } from './run-bill.component';

describe('RunBillComponent', () => {
  let component: RunBillComponent;
  let fixture: ComponentFixture<RunBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
