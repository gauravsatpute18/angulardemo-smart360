import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerCareComponent } from './consumer-care.component';

describe('ConsumerCareComponent', () => {
  let component: ConsumerCareComponent;
  let fixture: ComponentFixture<ConsumerCareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerCareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
