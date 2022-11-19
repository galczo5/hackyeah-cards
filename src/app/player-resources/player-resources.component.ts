import {Component, OnInit} from '@angular/core';
import {GameStateService, ResourceCard} from "../game-state.service";

@Component({
  selector: 'app-player-resources',
  templateUrl: './player-resources.component.html',
  styleUrls: ['./player-resources.component.css']
})
export class PlayerResourcesComponent implements OnInit {

  constructor(public readonly gameStateService: GameStateService) { }

  ngOnInit(): void {
  }
}
