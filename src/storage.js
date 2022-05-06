function save() {
  localStorage.setItem("task", JSON.stringify(tasksArray));
}
export { save };
