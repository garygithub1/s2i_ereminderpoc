import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

// import { EventEmitter } from 'events';

@Component({
  selector: 's2i-navbuttons',
  templateUrl: './s2i-navbuttons.component.html',
  // styleUrls: ['./s2i-navbuttons.component.css']
})
export class S2iNavbuttonsComponent implements OnInit {

  @Input() buttonName: string;
  @Input() buttonTitle: string;
  @Output() buttonClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    console.log('S2iNavbuttonsComponent created.');
  }

  ngOnInit() {
  }

  onClick() {
    console.log('S2iNavbuttonsComponent click event.');
    this.buttonClick.emit();
  }
}
