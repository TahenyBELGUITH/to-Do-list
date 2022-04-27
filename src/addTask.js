import { userTask, tasksArray } from './variables.js';
import { Task } from './task.js';

export let MOOD = 'CREATE';
export let tmp;
export const taskSection = document.querySelector('.tasks');

export const displayTask = (tasksArray) => {
  taskSection.innerHTML = '';
  for (let i = 0; i < tasksArray.length; i += 1) {
    taskSection.innerHTML += `
  <div class="one-task" id=${i}>
    <div class="data">
      <input id=${i} class="checkBoxClass" type="checkbox" ${tasksArray[i].status ? 'checked' : ''}>
      <p id=${i} class="${tasksArray[i].status ? 'checked' : ''} description">${tasksArray[i].task}</p>
    </div>
    <span class="span">&cross;</span>
  </div>
  `;
  }
};

export const addTask = () => {
  if (MOOD === 'CREATE') {
    const task = new Task(userTask);
    tasksArray.push(task);
    localStorage.setItem('task', JSON.stringify(tasksArray));
    displayTask(tasksArray);
    userTask.value = '';
  } else {
    tasksArray[tmp].task = userTask.value;
    localStorage.setItem('task', JSON.stringify(tasksArray));
    displayTask(tasksArray);
    userTask.value = '';
    MOOD = 'CREATE';
    userTask.blur();
  }
};

taskSection.addEventListener('click', (e) => {
  if (e.target.classList.contains('description')) {
    userTask.focus();
    userTask.value = e.target.innerHTML;
    MOOD = 'UPDATE';
    tmp = e.target.id;
  }
});