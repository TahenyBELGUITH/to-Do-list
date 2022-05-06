import "./style.css";
import change from "./change.js"; //eslint-disable-line
import { save } from "./storage.js";
import Task, { userTask } from "./task.js";
const clearAllCompleted = document.querySelector(".deleteAll");

const task = new Task();

userTask.addEventListener("keyup", (e) => {
  if (e.keyCode === 13 && userTask.value !== "") {
    e.preventDefault();
    task.addTask();
  }
});

task.displayTask(tasksArray);

taskSection.addEventListener("click", (e) => {
  if (e.target.classList.contains("span")) {
    tasksArray.splice(e.target.parentElement.id, 1);
    task.displayTask(tasksArray);
    task.updateIndex();
    save();
  }

  if (e.target.classList.contains("description")) {
    userTask.focus();
    userTask.value = e.target.innerHTML;
    MOOD = "UPDATE";
    tmp = e.target.id;
  }
});

change();
clearAllCompleted.addEventListener("click", () => {
  tasksArray = tasksArray.filter((task) => task.status === false);
  task.displayTask(tasksArray);
  task.updateIndex();
  save();
});
