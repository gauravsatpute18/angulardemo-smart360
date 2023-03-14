import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocomplaintsComponent } from './cocomplaints.component';

describe('CocomplaintsComponent', () => {
  let component: CocomplaintsComponent;
  let fixture: ComponentFixture<CocomplaintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocomplaintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocomplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
