import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from "./task/task";
import { dummyTasks } from '../dummy-tasks';
import { NewTask } from './new-task/new-task';
import {type newTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task,NewTask,],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input({ required: true }) nameUser!: string;
  @Input({ required: true }) idUser!: string;
  addingNewTask = false
  constructor(private tasksService: TasksService) {}
 
 



  get tasksUser() {
    return this.tasksService.getUserTasks(this.idUser);
  }

  onTaskCompleted(taskId: string) {
    this.tasksService.removeTask(taskId);
  }

  // moved methods inside class so `this` refers to the class instance
  addNewTask() {
    this.addingNewTask = true;
  }

  onCancelNewTask() {
    this.addingNewTask = false;
  }

  onAddNewTask(taskData: newTaskData) {
    this.tasksService.onAddNewTask(taskData , this.idUser);
    this.addingNewTask = false;
  }
}

