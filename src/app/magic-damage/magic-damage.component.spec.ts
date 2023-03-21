import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicDamageComponent } from './magic-damage.component';

describe('MagicDamageComponent', () => {
  let component: MagicDamageComponent;
  let fixture: ComponentFixture<MagicDamageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicDamageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicDamageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
