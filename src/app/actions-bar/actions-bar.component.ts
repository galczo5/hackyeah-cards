import {Component, OnInit} from '@angular/core';
import {GameStateService} from "../game-state.service";
import {NextUserService} from "../next-user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-actions-bar',
  templateUrl: './actions-bar.component.html',
  styleUrls: ['./actions-bar.component.css']
})
export class ActionsBarComponent implements OnInit {

  constructor(public readonly gameStateService: GameStateService,
              public readonly nextUserService: NextUserService,
              private readonly router: Router) {
  }

  ngOnInit(): void {
  }

  instantNext(disabled: boolean): void {
    if (disabled) {
      return;
    }
    this.gameStateService.nextUser();
  }

  drawResources(disabled: boolean) {
    if (disabled) {
      return;
    }

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

  randomizeResources(disabled: boolean) {
    if (disabled) {
      return;
    }

    this.gameStateService.randomizeResources();
    this.nextUserService.nextUser();
  }

  trade(disabled: boolean) {
    if (disabled) {
      return;
    }

    this.router.navigateByUrl('/trade');
  }
}
