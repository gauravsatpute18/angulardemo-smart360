import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavHcmComponent } from './side-nav-hcm.component';

describe('SideNavHcmComponent', () => {
  let component: SideNavHcmComponent;
  let fixture: ComponentFixture<SideNavHcmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavHcmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavHcmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
