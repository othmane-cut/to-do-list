import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users'; 
import { sign } from 'node:crypto';

const randomeUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
 selectedUser = signal(DUMMY_USERS[randomeUserIndex]);
// use get method to return path of image
//  get pathImage(){
//     return '../assets/users/' + this.selectedUser.avatar;
//   }

imagepath = computed(() => {
    return '../assets/users/' + this.selectedUser().avatar;
  });

  onUserClick() {
    const randomeUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomeUserIndex]);
  }
}
