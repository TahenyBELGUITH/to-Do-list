import './style.css';

const taskSection = document.querySelector('.tasks');
const userTask = document.querySelector('.user-task');
const tasksArray = JSON.parse(localStorage.getItem('task')) || [];
let MOOD = 'CREATE';
let tmp;
class Task {
  constructor(userTask) {
    this.id = tasksArray.length +1;
    this.task = userTask.value;
    this.status = false;
  }
}

const displayTask = (tasksArray) => {
  taskSection.innerHTML = '';
  for (let i = 0; i < tasksArray.length; i += 1) {
    taskSection.innerHTML += `
  <div class="one-task">
    <div class="data">
      <input id=${i} class="checkBoxClass" type="checkbox" ${tasksArray[i].status ? 'checked' : ''}>
      <p id=${i} class="${tasksArray[i].status ? 'checked' : ''} description">${tasksArray[i].task}</p>
    </div>
    <span class="span">&cross;</span>
  </div>
  `;
  }
};

const addTask = () => {
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

userTask.addEventListener('keyup', (e) => {
  if (e.keyCode === 13 && userTask.value !== '') {
    e.preventDefault();
    addTask();
  }
});

displayTask(tasksArray);
const updateIndex = () => {
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

taskSection.addEventListener('click', (e) => {
  if (e.target.classList.contains('span')) {
    tasksArray.splice(e.target.parentElement, 1);
    updateIndex()
    displayTask(tasksArray);
    localStorage.setItem('task', JSON.stringify(tasksArray));
  }

  if (e.target.classList.contains('description')) {
    userTask.focus();
    userTask.value = e.target.innerHTML;
    MOOD = 'UPDATE';
    tmp = e.target.id;
  }
});
