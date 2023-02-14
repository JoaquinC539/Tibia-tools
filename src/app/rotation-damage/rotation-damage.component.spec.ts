import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotationDamageComponent } from './rotation-damage.component';

describe('RotationDamageComponent', () => {
  let component: RotationDamageComponent;
  let fixture: ComponentFixture<RotationDamageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotationDamageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotationDamageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
