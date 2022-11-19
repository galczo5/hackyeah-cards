import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  private time$ = new Subject<number>()

  constructor() { }

  set(n: number): void {
    this.time$.next(n);
  }

  get(): Observable<number> {
    return this.time$.asObservable();
  }
}
