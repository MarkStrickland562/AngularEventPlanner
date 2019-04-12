import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { Task } from '../models/task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-search-task',
  templateUrl: './search-task.component.html',
  styleUrls: ['./search-task.component.css'],
  providers: [TaskService]
})

export class SearchTaskComponent implements OnInit {

  taskList: FirebaseListObservable<any[]>;
  searchString: string;

  constructor(private router: Router, private taskService: TaskService){}

  ngOnInit() {
    this.taskList = this.taskService.getTasks();
  }

  goToEditTaskPage(clickedTask) {
    this.router.navigate(['edit-task', clickedTask.$key]);
  }

  goToDeleteTaskPage(clickedTask) {
    this.router.navigate(['delete-task', clickedTask.$key]);
  }
}
