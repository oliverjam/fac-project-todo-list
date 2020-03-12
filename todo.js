const todoForm = document.querySelector("#todoForm");
const todoList = document.querySelector("#todoList");
const todoTemplate = document.querySelector("#todoItem");
const toggleFilter = document.querySelector("#filterComplete");

todoForm.addEventListener("submit", event => {
  event.preventDefault(); // stop the form from submitting the default request
  const newTask = event.target.elements.newTodo.value; // get the value of the name="newTodo" input
  const dom = todoTemplate.content.cloneNode(true); // get a copy of the DOM inside the <template>
  const todoItem = dom.querySelector("li");
  const label = dom.querySelector("span");
  label.textContent = newTask; // put the new task text inside the template copy
  const deleteButton = dom.querySelector("button");
  deleteButton.addEventListener("click", () => {
    todoItem.remove(); // remove this DOM node when delete button is clicked
  });
  todoList.appendChild(dom); // put the template copy onto the page
  todoForm.reset(); // reset all the form inputs
});

filterComplete.addEventListener("input", () => {
  const todos = todoList.querySelectorAll("li"); // get every todo inside the list
  // loop over each todo
  todos.forEach(todo => {
    const checkbox = todo.querySelector("input[type='checkbox']");
    if (filterComplete.checked && checkbox.checked) {
      // if the filter checkboxx and todo checkboxx are checked we should hide this todo
      todo.setAttribute("hidden", "");
    } else {
      // otherwise make sure it is visible
      todo.removeAttribute("hidden");
    }
  });
});
