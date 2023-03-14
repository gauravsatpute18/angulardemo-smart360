import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavSnmComponent } from './side-nav-snm.component';

describe('SideNavSnmComponent', () => {
  let component: SideNavSnmComponent;
  let fixture: ComponentFixture<SideNavSnmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavSnmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavSnmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
