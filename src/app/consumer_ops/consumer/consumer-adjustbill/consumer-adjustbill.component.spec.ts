import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerAdjustbillComponent } from './consumer-adjustbill.component';

describe('ConsumerAdjustbillComponent', () => {
  let component: ConsumerAdjustbillComponent;
  let fixture: ComponentFixture<ConsumerAdjustbillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerAdjustbillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerAdjustbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
