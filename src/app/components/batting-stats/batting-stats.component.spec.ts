import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattingStatsComponent } from './batting-stats.component';

describe('BattingStatsComponent', () => {
  let component: BattingStatsComponent;
  let fixture: ComponentFixture<BattingStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattingStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BattingStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
