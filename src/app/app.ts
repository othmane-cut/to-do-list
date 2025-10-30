import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, User,Tasks],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {
  users = DUMMY_USERS;
  selectedUserId = 'u1';
  
  get userSelected() {
    return this.users.find(user => user.id === this.selectedUserId)!;
  }

  onSelectUser(userId: string) {
    this.selectedUserId = userId;
  }
}
