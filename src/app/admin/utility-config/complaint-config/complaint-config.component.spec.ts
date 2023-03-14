import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintConfigComponent } from './complaint-config.component';

describe('ComplaintConfigComponent', () => {
  let component: ComplaintConfigComponent;
  let fixture: ComponentFixture<ComplaintConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplaintConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
