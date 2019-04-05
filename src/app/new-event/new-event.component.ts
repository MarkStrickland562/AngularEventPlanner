import { Component, Output, EventEmitter } from '@angular/core';
import { Event } from '../models/event.model';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})

export class NewEventComponent  {
  @Output() sendEvent = new EventEmitter();

  submitForm(eventName: string, eventDate: Date = new Date(), eventLocation: string) {
    let newEvent: Event = new Event(100, eventName, eventDate, eventLocation, 1);
    this.sendEvent.emit(newEvent);
  }
}
