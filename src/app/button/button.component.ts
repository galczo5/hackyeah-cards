import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input()
  disabled: boolean | null | undefined = false;

  @Output()
  selected = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
