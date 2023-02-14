import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LootSplitComponent } from './loot-split.component';

describe('LootSplitComponent', () => {
  let component: LootSplitComponent;
  let fixture: ComponentFixture<LootSplitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LootSplitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LootSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
