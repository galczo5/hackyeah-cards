import { Component, OnInit } from '@angular/core';
import {GameStateService} from "../game-state.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private readonly gameStateService: GameStateService,
              private readonly router: Router) { }

  ngOnInit(): void {
  }

  start() {
    this.gameStateService.newGame();
    this.router.navigateByUrl('/game');
  }
}
