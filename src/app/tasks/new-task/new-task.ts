import { Component,Output,EventEmitter, signal } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-new-task',
  imports: [BrowserModule, FormsModule],
  templateUrl: './new-task.html',
  styleUrls: ['./new-task.css']
})
export class NewTask {

  @Output() canceled = new EventEmitter<void>();
  summary = signal("");
  title = signal("");

  dueDate = signal("");

  onCancel() {
    this.canceled.emit();
  }

}
