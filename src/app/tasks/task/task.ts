import { Component, EventEmitter, Input, Output,inject } from '@angular/core';
import { task } from './task.model';
import { Card } from "../../shareUI/card/card";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';



@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {

@Input({ required: true }) task!: task;
private taskService = inject(TasksService);





onTaskComplete() {

  this.taskService.removeTask(this.task.id);
}




}
