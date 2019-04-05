import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../models/event.model';
import { eventList } from './../mock-data/event-data';

@Component({
  selector: 'app-show-events',
  templateUrl: './show-events.component.html',
  styleUrls: ['./show-events.component.css']
})

export class ShowEventsComponent  {
  eventList = eventList

  @Input() childEventList: Event[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(eventToEdit: Event) {
    this.clickSender.emit(eventToEdit);
  }
}
