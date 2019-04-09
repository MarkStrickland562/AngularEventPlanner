import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Event } from '../models/event.model';
import { EventService } from '../event.service';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css'],
  providers: [EventService]
})

export class NewEventComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private eventService: EventService) {}

  ngOnInit() {
  }

  goToShowEventPage() {
      this.router.navigate(['events']);
  }

  addEvent(eventName: string, eventDate: Date = new Date(), eventLocation: string, menusId: number) {
    this.eventService.addEvent(eventName, eventDate, eventLocation, menusId);
    this.goToShowEventPage();
  }
}
