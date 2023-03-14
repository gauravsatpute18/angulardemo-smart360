import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRequestConfigComponent } from './service-request-config.component';

describe('ServiceRequestConfigComponent', () => {
  let component: ServiceRequestConfigComponent;
  let fixture: ComponentFixture<ServiceRequestConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceRequestConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceRequestConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
