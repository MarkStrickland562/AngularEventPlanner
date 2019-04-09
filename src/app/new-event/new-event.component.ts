import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../models/event.model';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})

export class NewEventComponent  {
  @Input() lastEventId: number;
  @Output() sendEvent = new EventEmitter();

  submitForm(eventId: number, eventName: string, eventDate: Date = new Date(), eventLocation: string, menusId: number) {

    let newEvent: Event = new Event(eventId, eventName, eventDate, eventLocation, menusId);
    this.sendEvent.emit(newEvent);
  }
}
