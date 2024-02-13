import {
  addOrUpdateTaskBtn,
  tasksContainer,
  titleInput,
  dateInput,
  descriptionInput,
  modal,
  taskData,
  currentTask,
} from "./constants.js";
import { formatData } from "./date.js";
const addOrUpdateTask = () => {
  addOrUpdateTaskBtn.innerText = "Add Task";
  const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
  const taskObj = {
    id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
    title: titleInput.value,
    date: dateInput.value,
    created: formatData,
    description: descriptionInput.value,
  };

  if (dataArrIndex === -1) {
    taskData.unshift(taskObj);
  } else {
    taskData[dataArrIndex] = taskObj;
  }

  localStorage.setItem("data", JSON.stringify(taskData));
  updateTaskContainer();
  reset();
};

const updateTaskContainer = () => {
    tasksContainer.innerHTML = "";
  
    taskData.forEach(({ id, title, date,created, description }) => {
        
      const taskElement = document.createElement('div');
      taskElement.classList.add("task", "border-2", "rounded-md", "p-3");
      taskElement.id = id;
      taskElement.innerHTML = `
        <p><strong>Title:</strong> ${title}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Created:</strong> ${created}</p>

        <p><strong>Description:</strong> ${description}</p>
        <button id="edit-btn-${id}" type="button" class="btn btn bg-green-400 text-white">Edit</button>
        <button id="delete-btn-${id}" type="button" class="btn btn bg-red-400 text-white">Delete</button>
      `;
      tasksContainer.appendChild(taskElement);
  
      document
        .getElementById(`edit-btn-${id}`)
        .addEventListener("click", () => editTask(id));
      document
        .getElementById(`delete-btn-${id}`)
        .addEventListener("click", () => deleteTask(id));
    });
  };
  
  const deleteTask = (taskId) => {
    const dataArrIndex = taskData.findIndex((item) => item.id === taskId);
  
    if (dataArrIndex !== -1) {
      const taskElement = document.getElementById(taskId);
      taskElement.remove(); // Remove the task from DOM
      taskData.splice(dataArrIndex, 1); // Remove the task from the array
      localStorage.setItem("data", JSON.stringify(taskData)); // Update localStorage
    }
  };
  
  

const editTask = (taskId) => {
    const dataArrIndex = taskData.findIndex((item) => item.id === taskId);

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
};

export { addOrUpdateTask, updateTaskContainer, deleteTask, editTask, reset };
