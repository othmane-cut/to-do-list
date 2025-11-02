import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from "./task/task";
import { dummyTasks } from '../dummy-tasks';
import { NewTask } from './new-task/new-task';

@Component({
  selector: 'app-tasks',
  imports: [Task,NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input({ required: true }) nameUser!: string;
  @Input({ required: true }) idUser!: string;
  addingNewTask = false
  tasks= dummyTasks;



  get tasksUser() {
    return this.tasks.filter(task => task.userId === this.idUser);
  }

  onTaskCompleted(taskId: string) {
    this.tasks =this.tasks.filter((task)=> task.id !== taskId);

  }


 addNewTask() {
    this.addingNewTask = true;
 }
}
