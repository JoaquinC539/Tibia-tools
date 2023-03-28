import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MageRoationComponent } from './mage-roation.component';

describe('MageRoationComponent', () => {
  let component: MageRoationComponent;
  let fixture: ComponentFixture<MageRoationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MageRoationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MageRoationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
