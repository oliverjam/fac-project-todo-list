const todoForm = document.querySelector("#todoForm");
const todoList = document.querySelector("#todoList");

todoForm.addEventListener("submit", event => {
  event.preventDefault();
  const newTask = event.target.elements.newTodo.value;
  const listItem = document.createElement("li");
  listItem.textContent = newTask;
  todoList.appendChild(listItem);
});
