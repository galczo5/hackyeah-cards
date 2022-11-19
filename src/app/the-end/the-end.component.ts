import { Component, OnInit } from '@angular/core';
import {GameStateService} from "../game-state.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-the-end',
  templateUrl: './the-end.component.html',
  styleUrls: ['./the-end.component.css']
})
export class TheEndComponent implements OnInit {

  king = this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/kazimierz.png');

  constructor(public readonly gameStateService: GameStateService,
              private readonly domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}
