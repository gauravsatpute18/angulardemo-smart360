import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopaymentsfilterComponent } from './copaymentsfilter.component';

describe('CopaymentsfilterComponent', () => {
  let component: CopaymentsfilterComponent;
  let fixture: ComponentFixture<CopaymentsfilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopaymentsfilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopaymentsfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
