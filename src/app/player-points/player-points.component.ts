import { Component, OnInit } from '@angular/core';
import {GameStateService} from "../game-state.service";

@Component({
  selector: 'app-player-points',
  templateUrl: './player-points.component.html',
  styleUrls: ['./player-points.component.css']
})
export class PlayerPointsComponent implements OnInit {

  constructor(public readonly gameStateService: GameStateService) { }

  ngOnInit(): void {
  }

}
