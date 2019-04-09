import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../models/event.model';

@Component({
  selector: 'app-show-events',
  templateUrl: './show-events.component.html',
  styleUrls: ['./show-events.component.css']
})

export class ShowEventsComponent  {

  @Input() childEventList: Event[];
  @Output() clickSender = new EventEmitter();
  @Output() clickDeleteSender = new EventEmitter();

  editButtonClicked(eventToEdit: Event) {
    this.clickSender.emit(eventToEdit);
  }

  deleteButtonClicked(eventToDelete: Event) {
    this.clickDeleteSender.emit(eventToDelete);
  }
}
