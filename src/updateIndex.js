import { tasksArray } from './variables.js';

export const updateIndex = () => {
  for (let i = 0; i < tasksArray.length; i += 1) {
    tasksArray[i].id = i + 1;
  }
  tasksArray.sort((a, b) => {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
    return 0;
  });
};