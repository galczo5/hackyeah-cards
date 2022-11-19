import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerPointsComponent } from './player-points.component';

describe('PlayerPointsComponent', () => {
  let component: PlayerPointsComponent;
  let fixture: ComponentFixture<PlayerPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerPointsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
