import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionsBarComponent } from './actions-bar/actions-bar.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { PlayerResourcesComponent } from './player-resources/player-resources.component';
import { PlayerGoalsComponent } from './player-goals/player-goals.component';
import { PlayerPointsComponent } from './player-points/player-points.component';
import { PlayerAvatarComponent } from './player-avatar/player-avatar.component';
import { TimerComponent } from './timer/timer.component';
import { IntroComponent } from './intro/intro.component';
import { ManualComponent } from './manual/manual.component';
import { ResourceCardComponent } from './resource-card/resource-card.component';
import { GoalCardComponent } from './goal-card/goal-card.component';
import { TheEndComponent } from './the-end/the-end.component';
import { EpicBackgroundMusicPlayerComponent } from './epic-background-music-player/epic-background-music-player.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionsBarComponent,
    HomeComponent,
    GameComponent,
    ButtonComponent,
    CardComponent,
    PlayerResourcesComponent,
    PlayerGoalsComponent,
    PlayerPointsComponent,
    PlayerAvatarComponent,
    TimerComponent,
    IntroComponent,
    ManualComponent,
    ResourceCardComponent,
    GoalCardComponent,
    TheEndComponent,
    EpicBackgroundMusicPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
