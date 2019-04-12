import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Task } from '../models/task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
  providers: [TaskService]
})

export class NewTaskComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private taskService: TaskService) {}

  ngOnInit() {
  }

  goToShowTaskPage() {
      this.router.navigate(['tasks']);
  }

  addTask(taskDescription: string, taskPlannedStartDateTimeDate: Date = new Date()) {
    if (taskDescription != null && Date.parse(taskPlannedStartDateTimeDate.toString()) != 0) {
      let newTask: Task = new Task(taskDescription, taskPlannedStartDateTimeDate);
      this.taskService.addTask(newTask);
      this.goToShowTaskPage();
  } else {
    alert('All fields are required!');
  }
}
