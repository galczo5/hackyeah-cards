import { Component, OnInit } from '@angular/core';
import {GameStateService, GoalCard, getGoalPrice, ResourceCard, GoalPrice, getGoalPoints} from "../game-state.service";
import {NextUserService} from "../next-user.service";

@Component({
  selector: 'app-player-goals',
  templateUrl: './player-goals.component.html',
  styleUrls: ['./player-goals.component.css']
})
export class PlayerGoalsComponent implements OnInit {

  ResourceCard = ResourceCard;
  GoalCard = GoalCard;

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

  getGoalPrice(goal: GoalCard, res: ResourceCard): number {
    const goalPrice = getGoalPrice(goal);
    return goalPrice[res];
  }

  getGoalPoints(goal: GoalCard): number {
    return getGoalPoints(goal);
  }

  removeGoal(card: GoalCard) {
    this.gameStateService.removeGoal(card);
    this.nextUserService.nextUser();
  }
}
