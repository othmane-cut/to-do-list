import { Component, computed, Input,input, Output,EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users'; 
import { UserShape } from './user.model';
import { Card } from "../shareUI/card/card";

const randomeUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);


@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrls: ['./user.css']
})
export class User {
 /*@Input({required: true}) user !: {
    id: string;
    name: string;
    avatar: string;
  };*/

  user = input.required<UserShape>();
  @Input({required : true}) selected !: boolean;


  @Output() userClick = new EventEmitter<string>();

  pathimage = computed
  (() => `../assets/users/${this.user().avatar}`);
  // get pathimage(): string {
  //   return `../assets/users/${this.avatar}`;
  // }

  onUserClick() {
  this.userClick.emit(this.user().id);
  }
}
