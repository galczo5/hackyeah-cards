import {Component, OnInit} from '@angular/core';
import {GameStateService} from "../game-state.service";
import {timer} from "rxjs";
import {NextUserService} from "../next-user.service";

@Component({
  selector: 'app-actions-bar',
  templateUrl: './actions-bar.component.html',
  styleUrls: ['./actions-bar.component.css']
})
export class ActionsBarComponent implements OnInit {

  constructor(public readonly gameStateService: GameStateService,
              private readonly nextUserService: NextUserService) {
  }

  ngOnInit(): void {
  }

  debug(): void {
    this.gameStateService.nextUser();
  }

  drawResources() {
    this.gameStateService.drawResourceCard();
    this.nextUserService.nextUser();
  }

  drawGoal(disabled: boolean) {
    if (disabled) {
      return;
    }

    this.gameStateService.drawGoalCard();
    this.nextUserService.nextUser();
  }

  randomizeResources() {
    this.gameStateService.randomizeResources();
    this.nextUserService.nextUser();
  }
}
