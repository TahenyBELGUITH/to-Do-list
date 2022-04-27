import { tasksArray } from './variables.js'; //eslint-disable-line

export default class Task {
  constructor(userTask) {
    this.id = tasksArray.length + 1;
    this.task = userTask.value;
    this.status = false;
  }
}
