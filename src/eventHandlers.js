import { addOrUpdateTask, reset, updateTaskContainer,currentTask } from "./tasks.js";
import {
  taskForm,
  confirmCloseDialog,
  openTaskFormBtn,
  closeTaskFormBtn,
  cancelBtn,
  discardBtn,
  titleInput,
  dateInput,
  descriptionInput,
  modal
} from "./constants.js";

openTaskFormBtn.addEventListener("click", () =>
  modal.classList.toggle("hidden")
);

closeTaskFormBtn.addEventListener("click", () => {
  const formInputsContainValues =
    titleInput.value || dateInput.value || descriptionInput.value;
  const formInputValuesUpdated =
    titleInput.value !== currentTask.title ||
    dateInput.value !== currentTask.date ||
    descriptionInput.value !== currentTask.description;

  if (formInputsContainValues && formInputValuesUpdated) {
    confirmCloseDialog.showModal();
  } else {
    reset();
  }
});

cancelBtn.addEventListener("click", () => confirmCloseDialog.close());

discardBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
  reset();
});

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addOrUpdateTask();
});

document.addEventListener("DOMContentLoaded", () => {
  updateTaskContainer();
});
