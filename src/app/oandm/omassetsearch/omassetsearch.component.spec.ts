import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmassetsearchComponent } from './omassetsearch.component';

describe('OmassetsearchComponent', () => {
  let component: OmassetsearchComponent;
  let fixture: ComponentFixture<OmassetsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmassetsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmassetsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
