let input = document.querySelector("#stringTask")
let btn = document.querySelector("#btn")

// get tasks localStorage
window.addEventListener('load', () => {
  tasksList = JSON.parse(localStorage.getItem('list'))

  for (let index = 0; index < tasksList.length; index++) {
    const element = tasksList[index];
    saveListTask(element)
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
    localStorage.setItem('list', JSON.stringify(tasksList))

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
    removeTaskImg.addEventListener("click", (task) =>{
      task.delete = true
      if(task.delete){
        // add class and remove
        containerTasks.classList.add('delete')
        const remove = document.querySelector(".delete")
        remove.parentNode.removeChild(containerTasks)

        // remove task array
        tasksList.pop(task)

         // add localStorage
        localStorage.setItem('list', JSON.stringify(tasksList))
      }
    })

  // task checked
  checkedTaskImg.addEventListener("click", () =>{
    task.checked = true
    containerTasks.classList.toggle('check-text')
    titleTask.classList.toggle('check-text')
    checkedTaskImg.classList.toggle('check-img')

    localStorage.setItem('list', JSON.stringify(tasksList))
  })

  // clear input
  input.value = ""
  }

  // function loadChecked(data){
  //   const container = document.getElementsByClassName(data.id)

  //   for(let task of container){
  //       const classContainer = task.classList[0]
  //       if(task.getAttribute('checked') === 'true'){
  //           const btnChecked = task.querySelector('#checke')
  //           const textTask = task.querySelector('p')

  //           task.setAttribute('class', `${classContainer} task_container taskIsChecked`)

  //           btnChecked.setAttribute('id','unCheck')
  //           btnChecked.setAttribute('class','btn-check')

  //           textTask.setAttribute('class', '')
  //       }

  //   }
  // }

//preventing default event behavior
let form = document.querySelector('form')
form.addEventListener('submit', event =>{
  event.preventDefault()
})