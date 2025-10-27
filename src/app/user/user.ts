import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users'; 

const randomeUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrls: ['./user.css']
})
export class User {
  @Input() avatar!: string;
  @Input() name!: string;

  get pathimage(): string {
    return `../assets/users/${this.avatar}`;
  }

  onUserClick() {
  
  }
}
