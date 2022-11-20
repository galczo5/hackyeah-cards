import { Component, OnInit } from '@angular/core';
import {GameStateService, ResourceCard} from "../game-state.service";
import {Router} from "@angular/router";
import {NextUserService} from "../next-user.service";

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.css']
})
export class TradeComponent implements OnInit {

  selectedCard: ResourceCard | null = null;
  toBuy: ResourceCard | null = null;

  ResourceCard = ResourceCard;

  constructor(public readonly gameStateService: GameStateService,
              private readonly router: Router,
              private readonly nextUserService: NextUserService) { }

  ngOnInit(): void {
  }

  setSelectedCard(card: ResourceCard) {
    this.selectedCard = card;
  }


  setCardToBuy(toBuy: ResourceCard) {
    this.toBuy = toBuy;
  }

  trade() {
    if (this.selectedCard && this.toBuy) {
      this.router.navigateByUrl('/game');
      this.gameStateService.trade(this.selectedCard, this.toBuy);
      this.nextUserService.nextUser();
    }
  }
}
