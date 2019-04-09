import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Event } from '../models/event.model';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})

export class EditEventComponent implements OnInit {
  eventId: number = null;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
    this.eventId = parseInt(urlParameters['id']);
   })
  }

  finishedEditing() {
//    this.clickedDone.emit();
  }
}
