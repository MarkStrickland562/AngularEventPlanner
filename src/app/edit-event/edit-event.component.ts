import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';

import { Event } from '../models/event.model';
import { EventService } from '../event.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css'],
  providers: [EventService]
})

export class EditEventComponent implements OnInit {

  eventId: string;
  eventToUpdate;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private eventService: EventService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.eventId = urlParameters['id'];
    });
    this.eventService.getEventById(this.eventId).subscribe(dataLastEmittedFromObserver => {
      this.eventToUpdate = dataLastEmittedFromObserver;
    })
  }

  goToShowEventPage() {
      this.router.navigate(['events']);
  }

  updateEvent(eventToUpdate) {
    if (eventToUpdate.eventName != "" && Date.parse(eventToUpdate.eventDate.toString()) != 0 && eventToUpdate.eventLocation != "") {
      this.eventService.updateEvent(eventToUpdate);
      this.goToShowEventPage();
    } else {
      alert('All fields are required!');
    }
  }
}
