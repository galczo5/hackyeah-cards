import { Component, OnInit } from '@angular/core';
import {GameStateService} from "../game-state.service";

@Component({
  selector: 'app-player-avatar',
  templateUrl: './player-avatar.component.html',
  styleUrls: ['./player-avatar.component.css']
})
export class PlayerAvatarComponent implements OnInit {

  constructor(public readonly gameStateService: GameStateService) { }

  ngOnInit(): void {
  }

}
