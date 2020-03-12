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
  // first we need to create a task
  const todoInput = document.querySelector("#newTodo");
  todoInput.value = "test thing to do";
  const addTodoButton = document.querySelector("#addTodo");
  addTodoButton.click();
  const todoList = document.querySelector("#todoList");
  const todoItem = todoList.firstElementChild;
  const todoCheckbox = todoItem.querySelector("input[type='checkbox'");
  const todoLabel = todoItem.querySelector("span");
  todoCheckbox.click();

  const labelStyles = getComputedStyle(todoLabel);
  t.equal(
    labelStyles["text-decoration"],
    "line-through rgb(0, 0, 0)",
    "Label should have strikethrough applied"
  );

  // reset DOM so we don't impact other tests
  todoInput.value = "";
  todoList.innerHTML = "";
});

test("Deleting an entry removes it from the list", t => {
  // test goes here
});

test("Toggling the filter hides completed tasks from the list", t => {
  // test goes here
});
