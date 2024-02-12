import{ taskForm,
 confirmCloseDialog, 
 openTaskFormBtn, 
 closeTaskFormBtn, 
 addOrUpdateTaskBtn ,
 cancelBtn, 
 discardBtn ,
 tasksContainer, 
 titleInput, 
 dateInput, 
 descriptionInput,
 modal,
 taskData, 
 currentTask} from './constants.js'
const addOrUpdateTask = () => {
    addOrUpdateTaskBtn.innerText = "Add Task";
    const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
    const taskObj = {
      id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
      title: titleInput.value,
      date: dateInput.value,
      description: descriptionInput.value,
    };
  
    if (dataArrIndex === -1) {
      taskData.unshift(taskObj);
    } else {
      taskData[dataArrIndex] = taskObj;
    }
  
    localStorage.setItem("data", JSON.stringify(taskData));
    updateTaskContainer()
    reset()
  };
  

  const updateTaskContainer = () => {
    tasksContainer.innerHTML = "";
  
    taskData.forEach(
      ({ id, title, date, description }) => {
          (tasksContainer.innerHTML += `
          <div class="task border-2 rounded-md p-3 " id="${id}">
            <p><strong>Title:</strong> ${title}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Description:</strong> ${description}</p>
            <button onclick="editTask(this)" type="button" class="btn btn bg-green-400 text-white">Edit</button>
            <button onclick="deleteTask(this)" type="button" class="btn btn bg-red-400 text-white">Delete</button>
            
  
          </div>
        `)
      }
    );
  };
  

  const deleteTask = (buttonEl) => {
    const dataArrIndex = taskData.findIndex(
      (item) => item.id === buttonEl.parentElement.id
    );
  
    buttonEl.parentElement.remove();
    taskData.splice(dataArrIndex, 1);
    localStorage.setItem("data", JSON.stringify(taskData));
  }

  const editTask = (buttonEl) => {
    const dataArrIndex = taskData.findIndex(
    (item) => item.id === buttonEl.parentElement.id
  );

  currentTask = taskData[dataArrIndex];

  titleInput.value = currentTask.title;
  dateInput.value = currentTask.date;
  descriptionInput.value = currentTask.description;

  addOrUpdateTaskBtn.innerText = "Update Task";

  modal.classList.toggle("hidden");
}

const reset = () => {
    titleInput.value = "";
    dateInput.value = "";
    descriptionInput.value = "";
    modal.classList.toggle("hidden");
    
    currentTask = {};
  }

export { addOrUpdateTask, updateTaskContainer, deleteTask, editTask, reset };
