import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovalidationlistComponent } from './covalidationlist.component';

describe('CovalidationlistComponent', () => {
  let component: CovalidationlistComponent;
  let fixture: ComponentFixture<CovalidationlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovalidationlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovalidationlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
