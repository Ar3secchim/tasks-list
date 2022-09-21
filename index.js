let Input = document.querySelector("#stringTask")
let btn = document.querySelector("#btn")

let tasksList = []

btn.onclick = function (){
  let stringInput = Input.value

  if(stringInput){
    let task = {
      name: stringInput,
      checked: false
    }
    tasksList.push(task)
    saveListTask(tasksList)
  }else{
    // colocar mensagem de erro na inferface
    console.log("adiciona alguma tarefa")
  }
  console.log(tasksList)
}

function saveListTask (tasksList){
  for (let index = 0; index < tasksList.length; index++) {
    const list = tasksList[index];

// correção para adicionar nas divs
    const divList = document.createElement("div")
    divList.classList.add("list-task")

    const titleTask = document.createElement("h2")
    titleTask.innerText = tasksList[index].name
    divList.appendChild(titleTask)

    const checkedTask = document.createElement('img')
    checkedTask.src = "/assets/checked.svg"
    divList.insertBefore(checkedTask, titleTask)

    const removeTask = document.createElement("img")
    removeTask.src = "/assets/remove.svg"
    divList.appendChild(removeTask)

    // divList.style.display
    console.log(divList)
  }
}

// prevenindo comportamento padrão do evento
let form = document.querySelector('form')
form.addEventListener('submit', event =>{
  event.preventDefault()
})