import { Component,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {

  @Output() canceled = new EventEmitter<void>();

  onCancel() {
    this.canceled.emit();
  }

}
