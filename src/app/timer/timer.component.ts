import {Component, OnInit} from '@angular/core';
import {TimerService} from "../timer.service";
import {interval, takeWhile} from "rxjs";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  millis: number = 0;

  constructor(private readonly timerService: TimerService) { }

  ngOnInit(): void {
    this.timerService.get()
      .subscribe(n => {
        this.millis = n;
        interval(100)
          .pipe(
            takeWhile(() => this.millis > 0)
          )
          .subscribe(() => {
            this.millis = this.millis - 100;
          })
      });
  }

  getFormatted(): number {
    return Math.round(this.millis / 100) / 10;
  }

}
