import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { Event } from '../models/event.model';
import { EventService } from '../event.service';

@Component({
  selector: 'app-search-event',
  templateUrl: './search-event.component.html',
  styleUrls: ['./search-event.component.css'],
  providers: [EventService]
})

export class SearchEventComponent implements OnInit {

  eventList: FirebaseListObservable<any[]>;
  searchString: string;

  constructor(private router: Router, private eventService: EventService){}

  ngOnInit() {
    this.eventList = this.eventService.getEvents();
  }

  goToEditEventPage(clickedEvent) {
    this.router.navigate(['edit-event', clickedEvent.$key]);
  }

  goToDeleteEventPage(clickedEvent) {
    this.router.navigate(['delete-event', clickedEvent.$key]);
  }
}
