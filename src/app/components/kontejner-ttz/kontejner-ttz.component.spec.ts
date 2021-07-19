import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KontejnerTtzComponent } from './kontejner-ttz.component';

describe('KontejnerTtzComponent', () => {
  let component: KontejnerTtzComponent;
  let fixture: ComponentFixture<KontejnerTtzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KontejnerTtzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KontejnerTtzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
