import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../models/event.model';

@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.css']
})

export class DeleteEventComponent {
  @Output() sendConfirm = new EventEmitter();
  @Input() childSelectedEvent: Event;

  submitForm(confirmDelete) {
    if (confirmDelete === 'Y') {
    this.sendConfirm.emit(confirmDelete);
    }
  }
}
