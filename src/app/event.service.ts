import { Injectable } from '@angular/core';
import { eventList } from './mock-data/event-data';
import { Event } from './models/event.model';

@Injectable()
export class EventService {

  constructor() { }

  getEvents() {
    return eventList;
  }

  getEventById(eventId: number){
    for (var i = 0; i <= eventList.length - 1; i++) {
      if (eventList[i].eventId === eventId) {
        return eventList[i];
      }
    }
  }

  updateEvent(localUpdatedEvent){
    var eventToUpdate = this.getEventById(localUpdatedEvent.eventId);
    eventToUpdate.eventName = localUpdatedEvent.eventName;
    eventToUpdate.eventDate = localUpdatedEvent.eventDate;
    eventToUpdate.eventLocation = localUpdatedEvent.eventLocation;
  }

  deleteEvent(eventToBeDeleted){
    var eventToDelete = this.getEventById(eventToBeDeleted.eventId);
    eventList.splice(eventList.indexOf(eventToDelete), 1);
  }

}
