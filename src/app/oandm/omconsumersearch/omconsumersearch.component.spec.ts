import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmconsumersearchComponent } from './omconsumersearch.component';

describe('OmconsumersearchComponent', () => {
  let component: OmconsumersearchComponent;
  let fixture: ComponentFixture<OmconsumersearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmconsumersearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmconsumersearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
