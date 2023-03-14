import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavSourcingComponent } from './side-nav-sourcing.component';

describe('SideNavSourcingComponent', () => {
  let component: SideNavSourcingComponent;
  let fixture: ComponentFixture<SideNavSourcingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavSourcingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavSourcingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
