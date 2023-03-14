import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopaymentsComponent } from './copayments.component';

describe('CopaymentsComponent', () => {
  let component: CopaymentsComponent;
  let fixture: ComponentFixture<CopaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
