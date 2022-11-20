import { Injectable } from '@angular/core';
import {ReplaySubject, Subject, timer} from "rxjs";
import {GameStateService} from "./game-state.service";
import {TimerService} from "./timer.service";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NextUserService {

  private block$ = new ReplaySubject<boolean>(1);

  constructor(private readonly gameStateService: GameStateService,
              private readonly timerService: TimerService) { }

  nextUser(): void {
    const due = environment.production ? 4000 : 200;
    this.timerService.set(due);
    this.block$.next(true);
    timer(due)
      .subscribe(() => {
        this.gameStateService.nextUser();
        this.block$.next(false);
      });
  }

  isBlocked() {
    return this.block$.asObservable();
  }
}
