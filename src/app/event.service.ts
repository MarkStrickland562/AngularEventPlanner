import { Injectable } from '@angular/core';
import { Event } from './models/event.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class EventService {
  eventList: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.eventList = database.list('events');
  }

  getEvents() {
    return this.eventList;
  }

  getEventById(eventId: string) {
    return this.database.object('/events/' + eventId);
  }

  addEvent(newEvent: Event) {
    this.eventList.push(newEvent);
  }

  updateEvent(localUpdatedEvent){
    var eventInFirebase = this.getEventById(localUpdatedEvent.$key);
    eventInFirebase.update({eventName: localUpdatedEvent.eventName,
                            eventDate: localUpdatedEvent.eventDate,
                            eventLocation: localUpdatedEvent.eventLocation,
                            menusId: localUpdatedEvent.menusId});
  }

  deleteEvent(eventToBeDeleted){
    var eventToDeleteInFirebase = this.getEventById(eventToBeDeleted.$key);
    eventToDeleteInFirebase.remove();
  }
}
