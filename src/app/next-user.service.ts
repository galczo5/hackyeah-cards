import { Injectable } from '@angular/core';
import {timer} from "rxjs";
import {GameStateService} from "./game-state.service";

@Injectable({
  providedIn: 'root'
})
export class NextUserService {

  constructor(private readonly gameStateService: GameStateService) { }

  nextUser(): void {
    timer(2000)
      .subscribe(() => {
        this.gameStateService.nextUser();
      });
  }
}
