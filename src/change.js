import { taskSection, tasksArray } from './index.js'//eslint-disable-line

export default function change() {
  taskSection.addEventListener('change', (event) => {
    if (event.target.className === 'checkBoxClass') {
      tasksArray[event.target.id].status = !tasksArray[event.target.id].status;
      localStorage.setItem('task', JSON.stringify(tasksArray));
      event.target.parentElement.classList.toggle('checked');
    }
  });
}
