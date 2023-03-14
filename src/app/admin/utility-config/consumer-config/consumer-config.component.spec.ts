import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerConfigComponent } from './consumer-config.component';

describe('ConsumerConfigComponent', () => {
  let component: ConsumerConfigComponent;
  let fixture: ComponentFixture<ConsumerConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
