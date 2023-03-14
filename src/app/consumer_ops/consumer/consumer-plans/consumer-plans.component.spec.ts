import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerPlansComponent } from './consumer-plans.component';

describe('ConsumerPlansComponent', () => {
  let component: ConsumerPlansComponent;
  let fixture: ComponentFixture<ConsumerPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
