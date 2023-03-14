import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmconsumerViewComponent } from './smconsumer-view.component';

describe('SmconsumerViewComponent', () => {
  let component: SmconsumerViewComponent;
  let fixture: ComponentFixture<SmconsumerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmconsumerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmconsumerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
