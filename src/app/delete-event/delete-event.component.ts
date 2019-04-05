import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../models/event.model';

@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.css']
})

export class DeleteEventComponent {
  @Output() deleteEvent = new EventEmitter();

  submitForm(confirmDelete) {
    if (confirmDelete === 'Y') {
    this.deleteEvent.emit();
    }
  }
}
