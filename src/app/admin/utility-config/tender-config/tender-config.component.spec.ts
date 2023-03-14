import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderConfigComponent } from './tender-config.component';

describe('TenderConfigComponent', () => {
  let component: TenderConfigComponent;
  let fixture: ComponentFixture<TenderConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenderConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenderConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
