import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'd20d-plotpoint',
  templateUrl: './plotpoint.component.html',
  styleUrls: ['./plotpoint.component.scss']
})
export class PlotpointComponent implements OnInit {
  user = {
    firstName: 'John',
    password: 'test',
  };
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem($event) {
    console.log($event.target.name);
    
    this.newItemEvent.emit($event.target.value);
  }

  ngOnInit() {
  }

}
