import './style.css';

const taskSection = document.querySelector('.tasks');
const userTask = document.querySelector('.user-task')
let tasksArray = JSON.parse(localStorage.getItem("task")) || []
let MOOD = 'CREATE'
let tmp;
let clearAllCompleted = document.querySelector('.deleteAll')


class Task {
  constructor(userTask)
  {
  this.id = tasksArray.length;
  this.task = userTask.value;
  this.status = false;
  }
}

function displayTask(tasksArray)
{
  taskSection.innerHTML = ""
  for (let i=0 ; i<tasksArray.length ; i+=1)
  {
    taskSection.innerHTML+= `
  <div class="one-task">
    <div class="data">
      <input id=${i} class="checkBoxClass" type="checkbox" ${tasksArray[i].status ? 'checked' : ''}>
      <p id=${i} class="${tasksArray[i].status ? 'checked' : ''} description">${tasksArray[i].task}</p>
    </div>
    <span class="span">&cross;</span>
  </div>
  `
  }
}




function addTask(){
  if(MOOD == 'CREATE')
  { const task = new Task(userTask)
  tasksArray.push(task)
  localStorage.setItem( "task" , JSON.stringify( tasksArray ))
  displayTask( tasksArray )
  userTask.value = ""
  }else{
    tasksArray[tmp].task = userTask.value
    localStorage.setItem( "task" , JSON.stringify( tasksArray ))
    displayTask( tasksArray )
    userTask.value = ""
    console.log(tasksArray[tmp].task)
    MOOD = 'CREATE'
    userTask.blur()
  }
}

userTask.addEventListener('keyup',(e)=>{
  if (e.keyCode === 13 && userTask.value !== "") {
    e.preventDefault();
    addTask()
  }
})

displayTask( tasksArray )


taskSection.addEventListener('click', (e) => {
  if (e.target.classList.contains('span')) {
    tasksArray.splice(e.target.parentElement,1)
    displayTask(tasksArray)
    localStorage.setItem("task", JSON.stringify( tasksArray ))
  }

  if(e.target.classList.contains('checkBoxClass')){
    if(e.target.checked){
    tasksArray[ e.target.id].status = true
    localStorage.setItem("task", JSON.stringify( tasksArray ))
    e.target.parentElement.classList.add('checked')
    }else{  
    tasksArray[ e.target.id].status = false
    localStorage.setItem("task", JSON.stringify( tasksArray ))
    displayTask( tasksArray )
    e.target.parentElement.classList.remove('checked')
    
    }
  }

  if(e.target.classList.contains('description')){
    userTask.focus()
    userTask.value = e.target.innerHTML;
    MOOD = 'UPDATE'
    tmp = e.target.id
  }
})

clearAllCompleted.addEventListener('click', () => {
  for(let i=0; i<tasksArray.length ; i+=1){
    if(tasksArray[i].status=== true){
      tasksArray = tasksArray.filter(task => task.status !== tasksArray[i].status)
      displayTask( tasksArray )
      localStorage.setItem("task", JSON.stringify( tasksArray ))
    }
  }
})
