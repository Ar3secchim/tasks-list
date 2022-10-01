let input = document.querySelector("#stringTask")
let btn = document.querySelector("#btn")

function save(){
  localStorage.setItem('list', JSON.stringify(tasksList))
}
// get tasks localStorage
window.addEventListener('load', () => {
  tasksList = JSON.parse(localStorage.getItem('list')) || []

  for (let index = 0; index < tasksList.length; index++) {
    const element = tasksList[index]
    saveListTask(element)
    loadChecked(element)
  }
})

// add tasks
btn.onclick = function (){
  let inputValue = input.value

  if(inputValue){
    let task = {
      name: inputValue,
      checked: false,
      delete: false
    }

    saveListTask(task)
    tasksList.push(task)

    // add localStorage
    save()

    //remove error
    input.classList.remove("error")

  }else{
    const InputError =  () => {
      const error = document.querySelector("input")
      error.classList.add("error")
    }
    InputError()
  }
}


// create section tasks
const divList = document.createElement("div")
divList.classList.add("list-task")

const boardTask = document.querySelector(".board-task")
boardTask.appendChild(divList)

// create task on screen
function saveListTask (task){
  // create container tasks
    const containerTasks = document.createElement("div")
    containerTasks.classList.add("container-list-tasks")
    divList.appendChild(containerTasks)

  // create container name and ckecked
    const containerTitle = document.createElement("span")
    containerTitle.classList.add("tasks-name")
    containerTasks.appendChild(containerTitle)

  // create container img ckecked
    const checkedTaskImg = document.createElement("button")
    checkedTaskImg.setAttribute('class', 'check')
    containerTitle.appendChild(checkedTaskImg)

  // create container name h2
    const titleTask = document.createElement("h2")
    titleTask.innerText = task.name
    containerTitle.appendChild(titleTask)

  // create container img remove
    const removeTaskImg = document.createElement("button")
    removeTaskImg.classList.add("remove")
    containerTasks.appendChild(removeTaskImg)

  // remove task
    removeTaskImg.onclick= function (task){
      task.delete = true

      // add class and remove
      containerTasks.classList.add('delete')
      const remove = document.querySelector(".delete")
      remove.parentNode.removeChild(containerTasks)

      // remove task array
      tasksList.pop(task)

      // add localStorage
      save()
    }

  // task checked
  checkedTaskImg.onclick = function (){
    task.checked = true
    containerTasks.classList.toggle("check-container")
    checkedTaskImg.classList.toggle('check-img')
    titleTask.classList.toggle('check-text')
    save()
  }

  // clear input
  input.value = ""
  }

  function loadChecked(element){
    if(element.checked === true){
      const containerTasks = document.querySelector('.container-list-tasks')
      const button = document.querySelector('.check')
      const containerTitle = document.querySelector('h2')

      containerTasks.classList.add('check-container')
      containerTitle .classList.toggle('check-text')
      button.classList.add('check-img')
    }
  }


//preventing default event behavior
let form = document.querySelector('form')
form.addEventListener('submit', event =>{
  event.preventDefault()
})