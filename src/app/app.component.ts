import { Component } from '@angular/core';
import { eventList } from './mock-data/event-data';
import { Event } from './models/event.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'eHappenings';
  selectedEvent = null;

  eventList = eventList;

  editEvent(clickedEvent) {
    this.selectedEvent = clickedEvent;
  }

  addEvent(newEvent: Event) {
     this.eventList.push(newEvent);
   }

  finishedEditing() {
    this.selectedEvent = null;
  }

  deleteEvent(clickedEvent) {
    this.selectedEvent = clickedEvent;
    eventList.splice(this.selectedEvent);
  }
}
