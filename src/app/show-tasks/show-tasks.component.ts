import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { Task } from '../models/task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-show-tasks',
  templateUrl: './show-tasks.component.html',
  styleUrls: ['./show-tasks.component.css'],
  providers: [TaskService]
})

export class ShowTasksComponent implements OnInit {

  taskList: FirebaseListObservable<any[]>;
  selectedTask = null;
  selectedTaskToDelete = null;

  constructor(private router: Router, private taskService: TaskService){}

  ngOnInit() {
    this.taskList = this.taskService.getTasks();
  }

  editTask(clickedTask: Task) {
    this.selectedTask = clickedTask;
  }

  finishedEditing() {
    this.selectedTask = null;
  }

  goToEditTaskPage(clickedTask) {
    this.router.navigate(['edit-task', clickedTask.$key]);
  }

  goToDeleteTaskPage(clickedTask) {
    this.router.navigate(['delete-task', clickedTask.$key]);
  }

  goToAddTaskPage() {
    this.router.navigate(['new-task']);
  }
}
