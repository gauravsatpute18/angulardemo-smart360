import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovalidationlistconsumerComponent } from './covalidationlistconsumer.component';

describe('CovalidationlistconsumerComponent', () => {
  let component: CovalidationlistconsumerComponent;
  let fixture: ComponentFixture<CovalidationlistconsumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovalidationlistconsumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovalidationlistconsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
