import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoservicesComponent } from './coservices.component';

describe('CoservicesComponent', () => {
  let component: CoservicesComponent;
  let fixture: ComponentFixture<CoservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
