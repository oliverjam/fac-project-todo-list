const todoForm = document.querySelector("#todoForm");
const todoList = document.querySelector("#todoList");
const todoTemplate = document.querySelector("#todoItem");

todoForm.addEventListener("submit", event => {
  event.preventDefault();
  const newTask = event.target.elements.newTodo.value;
  const dom = todoTemplate.content.cloneNode(true);
  const label = dom.querySelector("span");
  label.textContent = newTask;
  todoList.appendChild(dom);
});
