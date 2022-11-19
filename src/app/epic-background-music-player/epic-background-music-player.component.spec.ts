import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpicBackgroundMusicPlayerComponent } from './epic-background-music-player.component';

describe('EpicBackgroundMusicPlayerComponent', () => {
  let component: EpicBackgroundMusicPlayerComponent;
  let fixture: ComponentFixture<EpicBackgroundMusicPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpicBackgroundMusicPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpicBackgroundMusicPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
