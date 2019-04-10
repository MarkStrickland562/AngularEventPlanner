export class Event {
  constructor (public eventName: string,
               public eventDate: Date = new Date(),
               public eventLocation: string,
               public menusId: number) {}
}
