import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerGoalsComponent } from './player-goals.component';

describe('PlayerGoalsComponent', () => {
  let component: PlayerGoalsComponent;
  let fixture: ComponentFixture<PlayerGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerGoalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
