import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Event } from '../models/event.model';
import { EventService } from '../event.service';

@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.css'],
  providers: [EventService]
})

export class DeleteEventComponent {
  eventId: number = null;
  eventToDelete: Event;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private eventService: EventService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.eventId = parseInt(urlParameters['id']);
    });
    this.eventToDelete = this.eventService.getEventById(this.eventId);
  }

  goToShowEventPage(){
    this.router.navigate(['events']);
  }

  onSelect(event: any) {
    if (event.target.value === "true") {
      this.eventService.deleteEvent(this.eventToDelete);
    }
    this.goToShowEventPage();
  }
}
