import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavConscareComponent } from './side-nav-conscare.component';

describe('SideNavConscareComponent', () => {
  let component: SideNavConscareComponent;
  let fixture: ComponentFixture<SideNavConscareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavConscareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavConscareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
