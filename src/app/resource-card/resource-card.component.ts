import {Component, Input, OnInit} from '@angular/core';
import {ResourceCard} from "../game-state.service";

@Component({
  selector: 'app-resource-card',
  templateUrl: './resource-card.component.html',
  styleUrls: ['./resource-card.component.css']
})
export class ResourceCardComponent implements OnInit {

  @Input()
  card: ResourceCard | undefined;

  @Input()
  active = false;

  constructor() { }

  ngOnInit(): void {
  }

  getImageUrl(card: ResourceCard): string {
    switch (card) {
      case ResourceCard.Cegla:
        return './assets/kamien.png';
      case ResourceCard.Zaprawa:
        return './assets/zaprawa.png';
      case ResourceCard.Drewno:
        return './assets/drewno.png';
    }
  }

}
