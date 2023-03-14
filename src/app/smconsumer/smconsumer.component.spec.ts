import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmconsumerComponent } from './smconsumer.component';

describe('SmconsumerComponent', () => {
  let component: SmconsumerComponent;
  let fixture: ComponentFixture<SmconsumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmconsumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmconsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
