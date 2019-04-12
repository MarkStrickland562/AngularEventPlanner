import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';

import { Task } from '../models/task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
  providers: [TaskService]
})

export class EditTaskComponent implements OnInit {

  taskId: string;
  taskToUpdate;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private taskService: TaskService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.taskId = urlParameters['id'];
    });
    this.taskService.getTaskById(this.taskId).subscribe(dataLastEmittedFromObserver => {
      this.taskToUpdate = dataLastEmittedFromObserver;
    })
  }

  goToShowTaskPage() {
      this.router.navigate(['tasks']);
  }

  updateTask(taskToUpdate) {
    if (taskToUpdate.description != "") {
      this.taskService.updateTask(taskToUpdate);
      this.goToShowTaskPage();
  } else {
    alert('All fields are required!');    
  }
}
