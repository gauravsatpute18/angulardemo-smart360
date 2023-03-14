import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerOutageComponent } from './consumer-outage.component';

describe('ConsumerOutageComponent', () => {
  let component: ConsumerOutageComponent;
  let fixture: ComponentFixture<ConsumerOutageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerOutageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerOutageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
