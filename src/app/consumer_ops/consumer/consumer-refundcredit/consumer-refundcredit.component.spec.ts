import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerRefundcreditComponent } from './consumer-refundcredit.component';

describe('ConsumerRefundcreditComponent', () => {
  let component: ConsumerRefundcreditComponent;
  let fixture: ComponentFixture<ConsumerRefundcreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerRefundcreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerRefundcreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
