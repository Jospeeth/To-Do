const modal = document.getElementById("miModal");

function showModal() {
  modal.style.display = "block";
}

 function closeModal() {
  modal.style.display = "none";
}

function saveTask() {
  modal.style.display = "none";
}

  document.getElementById("input-task").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        saveTask();
    }
});


modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});
