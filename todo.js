const todoForm = document.querySelector("#todoForm");
const todoList = document.querySelector("#todoList");
const todoTemplate = document.querySelector("#todoItem");
const toggleFilter = document.querySelector("#filterComplete");

todoForm.addEventListener("submit", event => {
  event.preventDefault();
  const newTask = event.target.elements.newTodo.value;
  const dom = todoTemplate.content.cloneNode(true);
  const todoItem = dom.querySelector("li");
  const label = dom.querySelector("span");
  label.textContent = newTask;
  const deleteButton = dom.querySelector("button");
  deleteButton.addEventListener("click", () => {
    todoItem.remove();
  });
  todoList.appendChild(dom);
  todoForm.reset();
});

filterComplete.addEventListener("input", () => {
  const todos = todoList.querySelectorAll("li");
  todos.forEach(todo => {
    const checkbox = todo.querySelector("input[type='checkbox']");
    if (filterComplete.checked && checkbox.checked) {
      todo.setAttribute("hidden", "");
    } else {
      todo.removeAttribute("hidden");
    }
  });
});
