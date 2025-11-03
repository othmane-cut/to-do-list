import { Component, EventEmitter, Input, Output } from '@angular/core';
import { task } from './task.model';
import { Card } from "../../shareUI/card/card";
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {

@Input({ required: true }) task!: task;

@Output() Complet  = new EventEmitter<string>();



ontaskComplete() {
  this.Complet.emit(this.task.id);  

}




}
