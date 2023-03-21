import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImbumentsComponent } from './imbuments.component';

describe('ImbumentsComponent', () => {
  let component: ImbumentsComponent;
  let fixture: ComponentFixture<ImbumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImbumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImbumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
