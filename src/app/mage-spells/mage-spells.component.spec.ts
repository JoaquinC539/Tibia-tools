import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MageSpellsComponent } from './mage-spells.component';

describe('MageSpellsComponent', () => {
  let component: MageSpellsComponent;
  let fixture: ComponentFixture<MageSpellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MageSpellsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MageSpellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
