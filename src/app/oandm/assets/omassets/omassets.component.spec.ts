import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmassetsComponent } from './omassets.component';

describe('OmassetsComponent', () => {
  let component: OmassetsComponent;
  let fixture: ComponentFixture<OmassetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmassetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmassetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
