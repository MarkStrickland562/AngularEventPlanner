import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { Event } from '../models/event.model';
import { EventService } from '../event.service';

@Component({
  selector: 'app-show-events',
  templateUrl: './show-events.component.html',
  styleUrls: ['./show-events.component.css'],
  providers: [EventService]
})

export class ShowEventsComponent implements OnInit {

  eventList: FirebaseListObservable<any[]>;
  selectedEvent = null;
  selectedEventToDelete = null;

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

  goToEditEventPage(clickedEvent) {
    this.router.navigate(['edit-event', clickedEvent.$key]);
  }

  goToDeleteEventPage(clickedEvent) {
    this.router.navigate(['delete-event', clickedEvent.$key]);
  }

  goToAddEventPage() {
    this.router.navigate(['new-event']);
  }
}
