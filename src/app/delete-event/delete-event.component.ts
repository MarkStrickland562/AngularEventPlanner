import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '@angular/core';

@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.css']
})

export class DeleteEventComponent {
  @Output() sendConfirm = new EventEmitter();
  @Input() childSelectedEvent: Event;

  submitForm(confirmDelete) {
    this.sendConfirm.emit(confirmDelete);
  }
}
