import { Component, Input } from '@angular/core';
import { Event } from '../models/event.model';

@Component({
  selector: 'app-search-event',
  templateUrl: './search-event.component.html',
  styleUrls: ['./search-event.component.css']
})

export class SearchEventComponent  {
  @Input() searchEventList: Event[];
}
