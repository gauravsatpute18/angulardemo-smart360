import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavConsopsComponent } from './side-nav-consops.component';

describe('SideNavConsopsComponent', () => {
  let component: SideNavConsopsComponent;
  let fixture: ComponentFixture<SideNavConsopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavConsopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavConsopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
