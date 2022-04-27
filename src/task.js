import { tasksArray } from './variables.js';

export class Task {
  constructor(userTask) {
    this.id = tasksArray.length + 1;
    this.task = userTask.value;
    this.status = false;
  }
}
