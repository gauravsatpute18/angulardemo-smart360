import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavOnmComponent } from './side-nav-onm.component';

describe('SideNavOnmComponent', () => {
  let component: SideNavOnmComponent;
  let fixture: ComponentFixture<SideNavOnmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavOnmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavOnmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
