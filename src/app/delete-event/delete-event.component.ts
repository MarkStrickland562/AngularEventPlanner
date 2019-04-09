import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../models/event.model';

@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.css']
})

export class DeleteEventComponent {
  @Input() eventToDelete: Event;
  @Output() deleteEvent = new EventEmitter();

  onSelect(event: any) {
    this.deleteEvent.emit(event.target.value);
  }
}
