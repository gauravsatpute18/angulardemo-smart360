import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavAssetsComponent } from './side-nav-assets.component';

describe('SideNavAssetsComponent', () => {
  let component: SideNavAssetsComponent;
  let fixture: ComponentFixture<SideNavAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavAssetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
