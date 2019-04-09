import { Component, OnInit } from '@angular/core';
import { eventList } from './mock-data/event-data';
import { Event } from './models/event.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'eHappenings';
  lastEventId = 0;
  selectedEvent = null;
  selectedEventToDelete = null;

  eventList: Event[];

  ngOnInit() {
    this.eventList = eventList;
    this.getLastEventId();
  }

  getLastEventId() {
    this.lastEventId = this.eventList[this.eventList.length - 1].eventId;
console.log(this.lastEventId);
  }

  editEvent(clickedEvent: Event) {
    this.selectedEvent = clickedEvent;
  }

  addEvent(newEvent: Event) {
     this.eventList.push(newEvent);
     this.getLastEventId();
   }

  finishedEditing() {
    this.selectedEvent = null;
  }

  confirmDeleteEvent(clickedEvent: Event) {
    this.selectedEventToDelete = clickedEvent;
  }

  deleteEvent(confirmDelete: string) {
    if (confirmDelete === "true") {
      eventList.splice(eventList.indexOf(this.selectedEventToDelete), 1);
    }
    this.selectedEventToDelete = null;
  }
}
