window.onload = () => {

    document.querySelector("nav").addEventListener("click", (event) => {
    if (event.target.closest(".logo")) {
      location.reload();
      
    } else if (event.target.closest(".heading")) {
      alert("heading ko kyu preshaan kar rha hai bhai hahahha");
    }
  });

  const inputBar = document.getElementById("inputBar");
  const addBtn = document.getElementById("addButton");

  addBtn.disabled = true

  inputBar.addEventListener("input", () => {
    if (inputBar.value.trim() === "") {
      addBtn.disabled = true;  // Disable if empty
    } else {
      addBtn.disabled = false; // Enable if has text
    }
  });
};


function addTask() {
  const inputBar = document.getElementById("inputBar");
  let result = inputBar.value.trim();


    const taskList = document.getElementById("tasksLists");
    const li = document.createElement("li");

    const taskTextElement = document.createElement("span");
    taskTextElement.textContent = result;
    taskTextElement.classList.add("task-text");
    const deleteBtn = createDeleteButton();
    const updateBtn = updateButton();
    const checkBtn = checkBox();

    deleteBtn.addEventListener("click", () => {
      li.remove();
    });

    updateBtn.addEventListener("click", () => {
      const newText = prompt("update your text", taskTextElement.textContent);
      if (newText !== null && newText.trim() !== "") {
        taskTextElement.textContent = newText;
      }
    });

    checkBtn.addEventListener("click", () => {
      if (checkBtn.checked === true) {
        taskTextElement.style.textDecoration = "line-through";
      } else {
        taskTextElement.style.textDecoration = "none";
      }
    });

    const btnContainer = document.createElement("div");
    btnContainer.classList.add("task-buttons");
    btnContainer.appendChild(checkBtn);
    btnContainer.appendChild(updateBtn);
    btnContainer.appendChild(deleteBtn);

    li.appendChild(taskTextElement);
    li.appendChild(btnContainer);

    taskList.appendChild(li);
    inputBar.value = "";
  
}

function createDeleteButton() {
  const deleteButton = document.createElement("p");
  deleteButton.textContent = "Delete";
  return deleteButton;
}

function updateButton() {
  const updateButton = document.createElement("p");
  updateButton.textContent = "update";
  return updateButton;
}

function checkBox() {
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.id = "myCheckBox";
  return checkBox;
}
