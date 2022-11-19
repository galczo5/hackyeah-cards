import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  active: boolean | null = false;

  @Output()
  selected = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
