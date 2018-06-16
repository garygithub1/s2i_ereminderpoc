import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S2iExpirydateComponent } from './s2i-expirydate.component';

describe('S2iExpirydateComponent', () => {
  let component: S2iExpirydateComponent;
  let fixture: ComponentFixture<S2iExpirydateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S2iExpirydateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S2iExpirydateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
