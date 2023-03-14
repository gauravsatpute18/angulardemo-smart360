import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerViewBillComponent } from './consumer-view-bill.component';

describe('ConsumerViewBillComponent', () => {
  let component: ConsumerViewBillComponent;
  let fixture: ComponentFixture<ConsumerViewBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerViewBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerViewBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
