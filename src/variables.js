import { displayTask } from './addTask.js'; //eslint-disable-line
import { updateIndex } from './updateIndex.js'; //eslint-disable-line
export const userTask = document.querySelector('.user-task');
export let tasksArray = JSON.parse(localStorage.getItem('task')) || [];//eslint-disable-line
export const clearAllCompleted = document.querySelector('.deleteAll');

clearAllCompleted.addEventListener('click', () => {
  tasksArray = tasksArray.filter((task) => task.status === false);
  updateIndex();
  displayTask(tasksArray);
  localStorage.setItem('task', JSON.stringify(tasksArray));
});