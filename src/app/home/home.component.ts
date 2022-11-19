import { Component, OnInit } from '@angular/core';
import {GameStateService} from "../game-state.service";
import {Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  kingImageUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/kazimierz.png');

  constructor(private readonly gameStateService: GameStateService,
              private readonly domSanitizer: DomSanitizer,
              private readonly router: Router) { }

  ngOnInit(): void {
  }

  start() {
    this.gameStateService.newGame();
    this.router.navigateByUrl('/manual');
  }
}
