import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GoalCard, ResourceCard, getGoalPrice, getGoalPoints} from "../game-state.service";

@Component({
  selector: 'app-goal-card',
  templateUrl: './goal-card.component.html',
  styleUrls: ['./goal-card.component.css']
})
export class GoalCardComponent implements OnInit {

  @Input()
  card!: GoalCard;

  @Input()
  active: boolean | null = false;

  @Input()
  removable = false;

  @Output()
  selected = new EventEmitter<boolean>();

  @Output()
  remove = new EventEmitter<GoalCard>();

  GoalCard = GoalCard;

  ResourceCard = ResourceCard;

  constructor() { }

  ngOnInit(): void {
  }

  getGoalPrice(goal: GoalCard, res: ResourceCard): number {
    const goalPrice = getGoalPrice(goal);
    return goalPrice[res];
  }

  getGoalPoints(goal: GoalCard): number {
    return getGoalPoints(goal);
  }

}
