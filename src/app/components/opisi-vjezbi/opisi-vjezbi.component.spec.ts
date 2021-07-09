import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpisiVjezbiComponent } from './opisi-vjezbi.component';

describe('OpisiVjezbiComponent', () => {
  let component: OpisiVjezbiComponent;
  let fixture: ComponentFixture<OpisiVjezbiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpisiVjezbiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpisiVjezbiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
