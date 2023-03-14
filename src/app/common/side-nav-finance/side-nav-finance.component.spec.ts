import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavFinanceComponent } from './side-nav-finance.component';

describe('SideNavFinanceComponent', () => {
  let component: SideNavFinanceComponent;
  let fixture: ComponentFixture<SideNavFinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavFinanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
