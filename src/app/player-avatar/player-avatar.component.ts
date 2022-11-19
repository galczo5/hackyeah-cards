import {Component, Input, OnInit} from '@angular/core';
import {GameStateService} from "../game-state.service";
import {SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-player-avatar',
  templateUrl: './player-avatar.component.html',
  styleUrls: ['./player-avatar.component.css']
})
export class PlayerAvatarComponent implements OnInit {

  @Input()
  imgSrc: SafeResourceUrl | null = null;

  constructor(public readonly gameStateService: GameStateService) { }

  ngOnInit(): void {
  }

}
