import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaladinrotComponent } from './paladinrot.component';

describe('PaladinrotComponent', () => {
  let component: PaladinrotComponent;
  let fixture: ComponentFixture<PaladinrotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaladinrotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaladinrotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
