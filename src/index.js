import './style.css';
import { userTask, tasksArray } from './variables.js';
import { addTask, displayTask, taskSection } from './addTask.js';
import updateIndex from './updateIndex.js';

userTask.addEventListener('keyup', (e) => {
  if (e.keyCode === 13 && userTask.value !== '') {
    e.preventDefault();
    addTask();
  }
});

displayTask(tasksArray);

taskSection.addEventListener('click', (e) => {
  if (e.target.classList.contains('span')) {
    tasksArray.splice(e.target.parentElement.id, 1);
    updateIndex();
    displayTask(tasksArray);
    localStorage.setItem('task', JSON.stringify(tasksArray));
  }
});

taskSection.addEventListener('change', (e) => {
  if (e.target.className === 'checkBoxClass') {
    tasksArray[e.target.id].status = !tasksArray[e.target.id].status;
    e.target.parentElement.classList.toggle('checked');
    displayTask(tasksArray);
    localStorage.setItem('task', JSON.stringify(tasksArray));
  }
});
