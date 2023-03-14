import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcmConfigComponent } from './hcm-config.component';

describe('HcmConfigComponent', () => {
  let component: HcmConfigComponent;
  let fixture: ComponentFixture<HcmConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcmConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcmConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
