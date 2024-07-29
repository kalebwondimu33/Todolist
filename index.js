document.getElementById("addTaskBtn").addEventListener("click", addTask);
document.getElementById("taskList").addEventListener("click", handleTaskClick);

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskValue = taskInput.value.trim();

  if (taskValue) {
    const taskList = document.getElementById("taskList");
    const newTask = document.createElement("li");
    newTask.textContent = taskValue;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", removeTask);

    newTask.appendChild(deleteBtn);

    newTask.addEventListener("dblclick", () => editTask(newTask));

    taskList.appendChild(newTask);
    taskInput.value = "";
  }
}

function editTask(taskItem) {
  const taskValue = taskItem.childNodes[0].textContent;
  const taskInput = document.createElement("input");
  taskInput.type = "text";
  taskInput.value = taskValue;

  taskItem.innerHTML = "";
  taskItem.appendChild(taskInput);
  taskInput.focus();

  taskInput.addEventListener("blur", () => {
    taskItem.innerHTML = taskInput.value.trim();
    taskItem.appendChild(createDeleteButton());
    taskItem.addEventListener("dblclick", () => editTask(taskItem));
  });

  taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      taskInput.blur();
    }
  });
}

function removeTask(e) {
  const taskItem = e.target.parentElement;
  taskItem.remove();
}

function createDeleteButton() {
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", removeTask);
  return deleteBtn;
}
