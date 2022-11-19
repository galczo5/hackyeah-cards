import {Component, OnInit} from '@angular/core';
import {GameStateService} from "../game-state.service";
import {filter} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-player-resources',
  templateUrl: './player-resources.component.html',
  styleUrls: ['./player-resources.component.css']
})
export class PlayerResourcesComponent implements OnInit {

  constructor(public readonly gameStateService: GameStateService,
              private readonly router: Router) {
  }

  ngOnInit(): void {
    this.gameStateService.getResourceStack()
      .pipe(
        filter(res => res.length === 0)
      )
      .subscribe(() => {
        this.router.navigateByUrl('/the-end');
      });
  }
}
