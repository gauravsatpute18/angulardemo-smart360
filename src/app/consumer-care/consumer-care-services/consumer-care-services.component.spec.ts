import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerCareServicesComponent } from './consumer-care-services.component';

describe('ConsumerCareServicesComponent', () => {
  let component: ConsumerCareServicesComponent;
  let fixture: ComponentFixture<ConsumerCareServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerCareServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerCareServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
