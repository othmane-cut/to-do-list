import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';
import { AddTask } from "./add-task/add-task";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, User, Tasks, AddTask],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
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
