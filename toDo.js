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
    let check = document.createElement("input");
    check.type="checkbox";
    check.className= "task-checkbox "
    elementList.textContent = task;
    
        // Agregar un controlador de eventos al checkbox
        check.addEventListener("change", function() {
          if (check.checked) {
            elementList.classList.add("checked"); // Aplicar la clase CSS cuando se marque el checkbox
          } else {
            elementList.classList.remove("checked"); // Quitar la clase CSS cuando se desmarque el checkbox
          }
        });
    

    document.getElementById("input-task").value = "";
    let lista = document.getElementById("list-todo");

    lista.appendChild(elementList).appendChild(check);
    closeModal();
  }
}


