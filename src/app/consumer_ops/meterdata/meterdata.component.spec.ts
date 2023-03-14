import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterdataComponent } from './meterdata.component';

describe('MeterdataComponent', () => {
  let component: MeterdataComponent;
  let fixture: ComponentFixture<MeterdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeterdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
