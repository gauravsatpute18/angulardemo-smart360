import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetersDataComponent } from './meters-data.component';

describe('MetersDataComponent', () => {
  let component: MetersDataComponent;
  let fixture: ComponentFixture<MetersDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetersDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetersDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
