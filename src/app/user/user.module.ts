import { BrowserModule } from "@angular/platform-browser";
import { Header } from "../header/header";
import { Task } from "../tasks/task/task";
import { Tasks } from "../tasks/tasks";
import { User } from "./user";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [Header, User, Tasks, Task, BrowserModule]
})
export class UserModule {}