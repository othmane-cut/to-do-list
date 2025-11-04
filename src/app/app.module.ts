import { NgModule } from "@angular/core";
import { Header } from "./header/header";
import { User } from "./user/user";
import { Tasks } from "./tasks/tasks";
import { Task } from "./tasks/task/task";
import { BrowserModule } from "@angular/platform-browser";


@NgModule({
  imports: [Header, User, Tasks, Task, BrowserModule]
})
export class AppModule {}