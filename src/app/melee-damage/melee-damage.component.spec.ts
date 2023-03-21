import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeleeDamageComponent } from './melee-damage.component';

describe('MeleeDamageComponent', () => {
  let component: MeleeDamageComponent;
  let fixture: ComponentFixture<MeleeDamageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeleeDamageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeleeDamageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
