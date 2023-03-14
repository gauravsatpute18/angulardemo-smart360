import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantsAddComponent } from './tenants-add.component';

describe('TenantsAddComponent', () => {
  let component: TenantsAddComponent;
  let fixture: ComponentFixture<TenantsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
