import { Component,Output,EventEmitter, signal } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {type newTaskData } from '../task/task.model';


@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrls: ['./new-task.css']
})
export class NewTask {

  @Output() canceled = new EventEmitter<void>();
  @Output() adding = new EventEmitter<newTaskData>();
  taskData!: newTaskData;
  summary = signal("");
  title = signal("");

  dueDate = signal("");

  onCancel() {
    this.canceled.emit();}

  onAddTask() {
   this.taskData={
    title: this.title(),
    summary: this.summary(),
    dueDate: this.dueDate()
   };
    this.adding.emit(this.taskData);
  }

}
