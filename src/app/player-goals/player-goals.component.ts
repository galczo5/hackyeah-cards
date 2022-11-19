import { Component, OnInit } from '@angular/core';
import {GameStateService, GoalCard} from "../game-state.service";
import {NextUserService} from "../next-user.service";

@Component({
  selector: 'app-player-goals',
  templateUrl: './player-goals.component.html',
  styleUrls: ['./player-goals.component.css']
})
export class PlayerGoalsComponent implements OnInit {

  constructor(public readonly gameStateService: GameStateService,
              private readonly nextUserService: NextUserService) { }

  ngOnInit(): void {
  }

  upgrade(canBuild: boolean | null, card: GoalCard) {
    if (!canBuild) {
      return;
    }

    this.gameStateService.upgrade(card);
    this.nextUserService.nextUser();
  }
}
