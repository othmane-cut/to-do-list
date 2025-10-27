import { Component, computed, Input,input } from '@angular/core';
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

  pathimage = computed
  (() => `../assets/users/${this.avatar()}`);
  // get pathimage(): string {
  //   return `../assets/users/${this.avatar}`;
  // }

  onUserClick() {
  
  }
}
