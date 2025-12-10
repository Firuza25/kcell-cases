function getActiveCount() {
  const list = document.getElementById("list");
  if (!list) return 0;
  const items = Array.from(list.querySelectorAll("li"));
  return items.filter((li) => !li.classList.contains("completed")).length;
}

function updateActiveCount() {
  const counter = document.querySelector(".active");
  if (!counter) return;
  counter.textContent = `Count of Active Tasks: ${getActiveCount()}`;
}

function addTask() {
  const taskInput = document.getElementById("list");
  const taskEl = document.getElementById("task");
  const task = taskEl ? taskEl.value.trim() : "";

  if (!task) {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");
  li.textContent = task;
  taskInput.appendChild(li);
  if (taskEl) taskEl.value = "";

  li.addEventListener("click", function () {
    li.classList.toggle("completed");
    updateActiveCount();
  });

  updateActiveCount();
}

function deleteTask() {
  const taskInput = document.getElementById("list");
  const tasks = taskInput.getElementsByTagName("li");
  const activeTasks = taskInput.getElementsByTagName("li").length;
  for (let i = tasks.length - 1; i >= 0; i--) {
    if (tasks[i].classList.contains("completed")) {
      taskInput.removeChild(tasks[i]);
    }
  }
  updateActiveCount();
}

