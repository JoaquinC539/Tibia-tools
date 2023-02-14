import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnightrotComponent } from './knightrot.component';

describe('KnightrotComponent', () => {
  let component: KnightrotComponent;
  let fixture: ComponentFixture<KnightrotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnightrotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnightrotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
