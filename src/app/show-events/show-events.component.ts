import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { eventList } from '../mock-data/event-data';
import { Event } from '../models/event.model';

@Component({
  selector: 'app-show-events',
  templateUrl: './show-events.component.html',
  styleUrls: ['./show-events.component.css']
})

export class ShowEventsComponent  {

  lastEventId = 0;
  selectedEvent = null;
  selectedEventToDelete = null;

  eventList: Event[];

  constructor(private router: Router){}

  ngOnInit() {
    this.eventList = eventList;
    this.getLastEventId();
  }

  getLastEventId() {
    this.lastEventId = this.eventList[this.eventList.length - 1].eventId;
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

  goToEditEventPage(clickedEvent: Event) {
      this.router.navigate(['edit-event', clickedEvent.eventId]);
  }

  // deleteButtonClicked(eventToDelete: Event) {
  //   this.clickDeleteSender.emit(eventToDelete);
  // }
}
