function addTask() {
  const inputBar = document.getElementById("inputBar");
  let result = inputBar.value.trim();
  if(result===""){
    alert("enter your lists")
  }else{

  

  const taskList = document.getElementById("tasksLists");
  const li = document.createElement("li");

  const taskTextElement = document.createElement("span");
  taskTextElement.textContent = result;
  const deleteBtn = createDeleteButton(); // ✅ call kara apna chhota function

  // 👇 Ab delete ka kaam set karo
  deleteBtn.addEventListener("click", () => {
    li.remove(); // ya taskList.removeChild(li);
  });

  const updateBtn = updateButton();
  updateBtn.addEventListener("click", () => {
    const newText = prompt("update your text", taskTextElement.textContent);
    if (newText !== null && newText.trim() !== "") {
      taskTextElement.textContent = newText;
    }
  });
  li.appendChild(taskTextElement)
  li.appendChild(updateBtn);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
  inputBar.value = "";
}}

function createDeleteButton() {
  const deleteButton = document.createElement("p");
  deleteButton.textContent = "×";
   deleteButton.style.borderRadius = "10px";
  deleteButton.style.cursor = "pointer";
  deleteButton.style.color = "red";
  deleteButton.style.backgroundColor = "transparent";
  return deleteButton;
}

function updateButton() {
  const updateButton = document.createElement("p");
  updateButton.textContent = "update";
  updateButton.style.borderRadius = "10px";
  return updateButton;
}
