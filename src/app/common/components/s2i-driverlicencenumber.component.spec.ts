import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S2iDriverlicencenumberComponent } from './s2i-driverlicencenumber.component';

describe('S2iDriverlicencenumberComponent', () => {
  let component: S2iDriverlicencenumberComponent;
  let fixture: ComponentFixture<S2iDriverlicencenumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S2iDriverlicencenumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S2iDriverlicencenumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
