import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterdatalistComponent } from './meterdatalist.component';

describe('MeterdatalistComponent', () => {
  let component: MeterdatalistComponent;
  let fixture: ComponentFixture<MeterdatalistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeterdatalistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterdatalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
