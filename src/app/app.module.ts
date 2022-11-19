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
    PlayerAvatarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
