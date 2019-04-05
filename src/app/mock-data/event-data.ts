import { Event } from './../models/event';

events: Event[] = [
  new Event(1, 'July 4th BBQ', new Date(2019, 6, 4), 'Woodland Park', 1),
  new Event(2, 'Easter Sunday Brunch', new Date(2019, 3, 21), 'Casa de Marco', 2),
  new Event(3, 'St. Patricks Day Party', new Date(2019, 2, 17), "Clara's House", 3)
];

console.log(events);
