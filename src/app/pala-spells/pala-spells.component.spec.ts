import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalaSpellsComponent } from './pala-spells.component';

describe('PalaSpellsComponent', () => {
  let component: PalaSpellsComponent;
  let fixture: ComponentFixture<PalaSpellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalaSpellsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalaSpellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
