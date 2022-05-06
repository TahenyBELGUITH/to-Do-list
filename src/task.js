export const taskSection = document.querySelector(".tasks");
export const userTask = document.querySelector(".user-task");
export const tasksArray = JSON.parse(localStorage.getItem("task")) || [];
let MOOD = "CREATE";
let tmp;

export default class Task {
  constructor(userTask) {
    this.id = tasksArray.length + 1;
    this.task = userTask.value;
    this.status = false;
  }

  displayTask(tasksArray) {
    taskSection.innerHTML = "";
    for (let i = 0; i < tasksArray.length; i += 1) {
      taskSection.innerHTML += `
  <div class="one-task" id=${i}>
    <div class="data">
      <input id=${i} class="checkBoxClass" type="checkbox" ${
        tasksArray[i].status ? "checked" : ""
      }>
      <p id=${i} class="${tasksArray[i].status ? "checked" : ""} description">${
        tasksArray[i].task
      }</p>
    </div>
    <span class="span">&cross;</span>
  </div>
  `;
    }
  }

  addTask() {
    if (MOOD === "CREATE") {
      const task = new Task(userTask);
      tasksArray.push(task);
      localStorage.setItem("task", JSON.stringify(tasksArray));
      displayTask(tasksArray);
      userTask.value = "";
    } else {
      tasksArray[tmp].task = userTask.value;
      localStorage.setItem("task", JSON.stringify(tasksArray));
      displayTask(tasksArray);
      userTask.value = "";
      MOOD = "CREATE";
      userTask.blur();
    }
  }

  updateIndex() {
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
  }
}
