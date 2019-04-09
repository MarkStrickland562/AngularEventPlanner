import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../models/event.model';
import { EventService } from '../event.service';

@Component({
  selector: 'app-show-events',
  templateUrl: './show-events.component.html',
  styleUrls: ['./show-events.component.css'],
  providers: [EventService]
})

export class ShowEventsComponent implements OnInit {

  selectedEvent = null;
  selectedEventToDelete = null;

  eventList: Event[];

  constructor(private router: Router, private eventService: EventService){}

  ngOnInit() {
    this.eventList = this.eventService.getEvents();
  }

    editEvent(clickedEvent: Event) {
    this.selectedEvent = clickedEvent;
  }

  finishedEditing() {
    this.selectedEvent = null;
  }

  // confirmDeleteEvent(clickedEvent: Event) {
  //   this.selectedEventToDelete = clickedEvent;
  // }

  goToEditEventPage(clickedEvent: Event) {
      this.router.navigate(['edit-event', clickedEvent.eventId]);
  }

  goToDeleteEventPage(clickedEvent: Event) {
      this.router.navigate(['delete-event', clickedEvent.eventId]);
  }

  goToAddEventPage() {
    this.router.navigate(['new-event']);
  }
}
