import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Header } from './app/header/header';
import { User } from './app/user/user';
import { Tasks } from './app/tasks/tasks';
import { Task } from './app/tasks/task/task';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

  bootstrapApplication(Header)
  bootstrapApplication(User)
  bootstrapApplication(Tasks)
bootstrapApplication(Task)