let input = document.querySelector("input")

let tasksList = []

function newTasks(string){
  const task = {
    text,
    checked: false
  }
  tasksList.push(task)
  console.log(tasksList)
}

let button = document.getElementById("button-submit")

button.addEventListener('submit', event =>{
  event.preventDefault()
  console.log('deu certo')
})