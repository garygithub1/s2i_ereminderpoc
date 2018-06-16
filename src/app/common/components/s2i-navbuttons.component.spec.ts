import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S2iNavbuttonsComponent } from './s2i-navbuttons.component';

describe('S2iNavbuttonsComponent', () => {
  let component: S2iNavbuttonsComponent;
  let fixture: ComponentFixture<S2iNavbuttonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S2iNavbuttonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S2iNavbuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
