import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanceDamageComponent } from './distance-damage.component';

describe('DistanceDamageComponent', () => {
  let component: DistanceDamageComponent;
  let fixture: ComponentFixture<DistanceDamageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistanceDamageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistanceDamageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
