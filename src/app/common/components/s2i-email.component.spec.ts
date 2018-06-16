import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S2iEmailComponent } from './s2i-email.component';

describe('S2iEmailComponent', () => {
  let component: S2iEmailComponent;
  let fixture: ComponentFixture<S2iEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S2iEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S2iEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
