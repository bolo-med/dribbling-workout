import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreningZvukComponent } from './trening-zvuk.component';

describe('TreningZvukComponent', () => {
  let component: TreningZvukComponent;
  let fixture: ComponentFixture<TreningZvukComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreningZvukComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreningZvukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
