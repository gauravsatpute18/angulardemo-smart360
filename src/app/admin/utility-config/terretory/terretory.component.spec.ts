import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerretoryComponent } from './terretory.component';

describe('TerretoryComponent', () => {
  let component: TerretoryComponent;
  let fixture: ComponentFixture<TerretoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerretoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerretoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
