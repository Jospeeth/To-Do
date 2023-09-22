const modal = document.getElementById("miModal");

function showModal() {
  modal.style.display = "block";
}

export function closeModal() {
  modal.style.display = "none";
}


  document.getElementById("input-task").addEventListener("keyup", (event)=> {
    if (event.key === "Enter") {
      closeModal();
    }
});


modal.addEventListener("click", (event)=> {
  if (event.target === modal) {
    closeModal();
  }
});
document.getElementById("addTaskButton").addEventListener("click",()=> {
  showModal();
});
