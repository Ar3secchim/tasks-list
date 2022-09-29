let input = document.querySelector("#stringTask")
let btn = document.querySelector("#btn")

// get tasks placeholder
window.addEventListener('load', () => {
  tasksList = [] || JSON.stringify(divList)
    fetch('https://my-json-server.typicode.com/Ar3secchim/tasks-list/todos')
    .then((response) => response.json())
    .then((tasksList) => {
      for (let index = 0; index < tasksList.length; index++) {
        const element = tasksList[index];
        saveListTask(element)
      }
    })
})
``
// add tasks
btn.onclick = function (){
  let inputValue = input.value

  if(inputValue){
    let data = {
      name: inputValue,
      checked: false,
      delete: false
    }
    fetch('https://my-json-server.typicode.com/Ar3secchim/tasks-list/todos', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => saveListTask(data));
    tasksList.push(data)
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
function saveListTask (data){
  // create container tasks
    const containerTasks = document.createElement("div")
    containerTasks.classList.add("container-list-tasks")
    divList.appendChild(containerTasks)

  // create container name and ckecked
    const containerTitle = document.createElement("span")
    containerTitle.classList.add("tasks-name")
    containerTasks.appendChild(containerTitle)

  // create container img ckecked
    const checkedTaskImg = document.createElement("img")
    checkedTaskImg.src = "/assets/checked.svg"
    containerTitle.appendChild(checkedTaskImg)

  // create container name h2
    const titleTask = document.createElement("h2")
    titleTask.innerText = data.name
    containerTitle.appendChild(titleTask)

  // create container img remove
    const removeTaskImg = document.createElement("img")
    removeTaskImg.src = "/assets/remove.svg"
    removeTaskImg.classList.add("btn-remove")
    containerTasks.appendChild(removeTaskImg)

  // remove task
    removeTaskImg.addEventListener("click", (data) =>{
      data.delete = true
      if(data.delete){
        // add class and remove
        containerTasks.classList.add('delete')
        const remove = document.querySelector(".delete")
        remove.parentNode.removeChild(containerTasks)

      }
    })

  // task checked
  checkedTaskImg.addEventListener("click", () =>{
    data.checked = true
    containerTasks.classList.toggle('check')
    titleTask.classList.toggle('check')
    // update placeholder

  })

  // clear input
  input.value = ""
  }

//preventing default event behavior
let form = document.querySelector('form')
form.addEventListener('submit', event =>{
  event.preventDefault()
})