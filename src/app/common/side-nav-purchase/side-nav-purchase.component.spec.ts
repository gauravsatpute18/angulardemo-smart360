import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavPurchaseComponent } from './side-nav-purchase.component';

describe('SideNavPurchaseComponent', () => {
  let component: SideNavPurchaseComponent;
  let fixture: ComponentFixture<SideNavPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
