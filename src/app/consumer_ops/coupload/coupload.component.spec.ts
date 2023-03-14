import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouploadComponent } from './coupload.component';

describe('CouploadComponent', () => {
  let component: CouploadComponent;
  let fixture: ComponentFixture<CouploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
