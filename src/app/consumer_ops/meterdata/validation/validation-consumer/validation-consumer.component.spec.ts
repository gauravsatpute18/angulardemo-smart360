import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationConsumerComponent } from './validation-consumer.component';

describe('ValidationConsumerComponent', () => {
  let component: ValidationConsumerComponent;
  let fixture: ComponentFixture<ValidationConsumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationConsumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
