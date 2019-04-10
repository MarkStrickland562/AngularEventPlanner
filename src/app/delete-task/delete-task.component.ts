import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';

import { Task } from '../models/task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css'],
  providers: [TaskService]
})

export class DeleteTaskComponent implements OnInit {
  taskId: string;
  taskToDelete;

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
      this.taskToDelete = dataLastEmittedFromObserver;
    })
  }

  goToShowTaskPage(){
    this.router.navigate(['tasks']);
  }

  onSelect(task: any) {
    if (task.target.value === "true") {
      this.taskService.deleteTask(this.taskToDelete);
    }
    this.goToShowTaskPage();
  }
}
