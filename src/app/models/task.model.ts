export class Task {
  constructor(public taskId: number,
              public taskDescription: string,
              public taskPlannedStartDateTime: Date = new Date()) {}
}
