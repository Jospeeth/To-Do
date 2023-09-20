const modal1 = document.getElementById("miModal");
const tasks = [];

function closeModal() {
  modal1.style.display = "none";
}
function saveTask() {
  const task = document.getElementById("input-task").value;
  

  if (task == "") {
    alert("You should write a task");
  } else {
    tasks.push(task);
    console.log(tasks);

    let elementList = document.createElement("li");
    elementList.textContent = task;
    
    document.getElementById("input-task").value = "";
    let lista = document.getElementById("list-todo");
    lista.appendChild(elementList);
    closeModal();
  }
}
