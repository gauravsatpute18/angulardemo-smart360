import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerPaymentsComponent } from './consumer-payments.component';

describe('ConsumerPaymentsComponent', () => {
  let component: ConsumerPaymentsComponent;
  let fixture: ComponentFixture<ConsumerPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
