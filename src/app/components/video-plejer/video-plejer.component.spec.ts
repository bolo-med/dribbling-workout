import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPlejerComponent } from './video-plejer.component';

describe('VideoPlejerComponent', () => {
  let component: VideoPlejerComponent;
  let fixture: ComponentFixture<VideoPlejerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoPlejerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPlejerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
