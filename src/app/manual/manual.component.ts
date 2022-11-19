import { Component, OnInit } from '@angular/core';
import {ResourceCard, GoalCard} from "../game-state.service";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.css']
})
export class ManualComponent implements OnInit {

  ResourceCard = ResourceCard;
  GoalCard = GoalCard;

  player1 = this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/macko.png');
  player2 = this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/zbyszko.png');
  player3 = this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/andrzej.png');

  constructor(private readonly domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}
