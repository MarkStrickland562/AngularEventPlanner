import { Injectable } from '@angular/core';
import { Task } from './models/task.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class TaskService {
  taskList: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.taskList = database.list('tasks');
  }

  getTasks() {
    return this.taskList;
  }

  getTaskById(taskId: string) {
    return this.database.object('/tasks/' + taskId);
  }

  addTask(newTask: Task) {
    this.taskList.push(newTask);
  }

  updateTask(localUpdatedTask){
    var taskInFirebase = this.getTaskById(localUpdatedTask.$key);
    taskInFirebase.update({taskDescription: localUpdatedTask.taskDescription,
                            taskPlannedStartDateTime: localUpdatedTask.taskPlannedStartDateTime
                        });
  }

  deleteTask(taskToBeDeleted){
    var taskToDeleteInFirebase = this.getTaskById(taskToBeDeleted.$key);
    taskToDeleteInFirebase.remove();
  }
}
