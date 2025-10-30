import { Component, Input } from '@angular/core';
import { Task } from "./task/task";
import { dummyTasks } from '../dummy-tasks';

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input({ required: true }) nameUser!: string;
  @Input({ required: true }) idUser!: string;
  task= dummyTasks;


  get tasksUser() {
    return this.task.filter(task => task.userId === this.idUser);
  }


}
