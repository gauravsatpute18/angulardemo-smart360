import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisconnectionComponent } from './disconnection.component';

describe('DisconnectionComponent', () => {
  let component: DisconnectionComponent;
  let fixture: ComponentFixture<DisconnectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisconnectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisconnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
