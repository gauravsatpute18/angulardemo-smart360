import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodispatchviewComponent } from './codispatchview.component';

describe('CodispatchviewComponent', () => {
  let component: CodispatchviewComponent;
  let fixture: ComponentFixture<CodispatchviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodispatchviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodispatchviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
