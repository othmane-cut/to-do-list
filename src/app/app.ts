

import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';




@Component({
  selector: 'app-root',
  
  
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
 
})

export class App {
  users = DUMMY_USERS;
  selectedUserId  ?: string;
  
  get userSelected() {
    return this.users.find(user => user.id === this.selectedUserId)!;
  }

  onSelectUser(userId: string) {
    this.selectedUserId = userId;
  }
}
