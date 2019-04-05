import { Component } from '@angular/core';
import { Event } from './models/event.model';
import { eventList } from './mock-data/event-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eHappenings';

  eventList = eventList;
}
