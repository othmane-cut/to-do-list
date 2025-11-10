import { Component,Output,EventEmitter, signal, inject ,Input} from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {type newTaskData } from '../task/task.modeldata';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrls: ['./new-task.css']
})
export class NewTask {

  @Input() userId!: string;
  @Output() canceled = new EventEmitter<void>();
  ;
   private taskService = inject(TasksService);

  taskData!: newTaskData;
  summary = signal("");
  title = signal("");

  dueDate = signal("");

  onCancel() {
    this.canceled.emit();}

  onAddTask() {
  this.taskService.onAddNewTask(
    {
      title: this.title(),
      summary: this.summary(),
      dueDate: this.dueDate(),
    },
    this.userId
  );
  this.canceled.emit();
  }

}
