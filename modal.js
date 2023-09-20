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


modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});
