import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, User],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  users = DUMMY_USERS;


  onSelectUser(userId: string) {
    console.log('Selected user ID: ' + userId);
  }
}
