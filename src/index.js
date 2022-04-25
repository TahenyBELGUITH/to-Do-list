import './style.css';

const taskSection = document.querySelector('.tasks');
const userTask = document.querySelector('.user-task')
let tasksArray = [{
  id:0,
  task:"learn JS",
  status:false,
},
{id:1,
  task:"learn REACT",
  status:false,
},]
let MOOD = 'CREATE'

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

