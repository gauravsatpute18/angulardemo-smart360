import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumFormatConfigComponent } from './num-format-config.component';

describe('NumFormatConfigComponent', () => {
  let component: NumFormatConfigComponent;
  let fixture: ComponentFixture<NumFormatConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumFormatConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumFormatConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
