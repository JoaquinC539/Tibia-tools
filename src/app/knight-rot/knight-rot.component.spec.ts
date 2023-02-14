import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnightRotComponent } from './knight-rot.component';

describe('KnightRotComponent', () => {
  let component: KnightRotComponent;
  let fixture: ComponentFixture<KnightRotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnightRotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnightRotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
