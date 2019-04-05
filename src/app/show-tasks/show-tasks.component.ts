import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { taskList } from './../mock-data/task-data';

@Component({
  selector: 'app-show-tasks',
  templateUrl: './show-tasks.component.html',
  styleUrls: ['./show-tasks.component.css']
})
export class ShowTasksComponent {

  taskList = taskList;

}
