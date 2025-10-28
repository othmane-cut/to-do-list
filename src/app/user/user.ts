import { Component, computed, Input,input, Output,EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users'; 

const randomeUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrls: ['./user.css']
})
export class User {
  //@Input({required: true}) avatar!: string;
  //@Input({required: true}) name!: string;
  avatar = input.required<string>();
  name = input.required<string>();
  id = input.required<string>();

  @Output() userClick = new EventEmitter<string>();

  pathimage = computed
  (() => `../assets/users/${this.avatar()}`);
  // get pathimage(): string {
  //   return `../assets/users/${this.avatar}`;
  // }

  onUserClick() {
  this.userClick.emit(this.id());
  }
}
