import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Event } from '../models/event.model';
import { EventService } from '../event.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css'],
  providers: [EventService]
})

export class EditEventComponent implements OnInit {
  eventId: number = null;
  eventToUpdate: Event;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private eventService: EventService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.eventId = parseInt(urlParameters['id']);
    });
    this.eventToUpdate = this.eventService.getEventById(this.eventId);
  }

  goToShowEventPage() {
      this.router.navigate(['events']);
  }

  updateEvent(eventToUpdate) {
    this.eventService.updateEvent(eventToUpdate);
    this.goToShowEventPage();
  }
}
