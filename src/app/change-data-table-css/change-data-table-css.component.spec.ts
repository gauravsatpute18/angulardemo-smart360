import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDataTableCSSComponent } from './change-data-table-css.component';

describe('ChangeDataTableCSSComponent', () => {
  let component: ChangeDataTableCSSComponent;
  let fixture: ComponentFixture<ChangeDataTableCSSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeDataTableCSSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDataTableCSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
