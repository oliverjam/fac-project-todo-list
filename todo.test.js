test("Submitting a new task adds it to the list", t => {
  const todoInput = document.querySelector("#newTodo");
  todoInput.value = "test thing to do"; // type in our task text
  const addTodoButton = document.querySelector("#addTodo");
  addTodoButton.click(); // submit the add todo form
  const todoList = document.querySelector("#todoList");
  const todoItem = todoList.firstElementChild;
  t.equal(todoItem.textContent, "test thing to do"); // our task should be inside the todo list

  // reset DOM so we don't impact other tests
  todoInput.value = "";
  todoList.innerHTML = "";
});

test("Checking an entry marks it as complete", t => {
  // test goes here
});

test("Deleting an entry removes it from the list", t => {
  // test goes here
});

test("Toggling the filter hides completed tasks from the list", t => {
  // test goes here
});
