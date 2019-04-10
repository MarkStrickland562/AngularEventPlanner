export class Task {
  constructor(public taskDescription: string,
              public taskPlannedStartDateTime: Date = new Date()) {}
}
