// export const taskSection = document.querySelector('.tasks');
// export let tmp;
import { displayTask } from './addTask.js';
import { updateIndex } from './updateIndex.js';

export const userTask = document.querySelector('.user-task');
export let tasksArray = JSON.parse(localStorage.getItem('task')) || [];
export const clearAllCompleted = document.querySelector('.deleteAll');

clearAllCompleted.addEventListener('click', () => {
  tasksArray = tasksArray.filter((task) => task.status === false);
  updateIndex();
  displayTask(tasksArray);
  localStorage.setItem('task', JSON.stringify(tasksArray));
});