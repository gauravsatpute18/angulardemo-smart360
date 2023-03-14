import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceConfigComponent } from './finance-config.component';

describe('FinanceConfigComponent', () => {
  let component: FinanceConfigComponent;
  let fixture: ComponentFixture<FinanceConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
