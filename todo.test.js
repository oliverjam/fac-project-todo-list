function addTestTodo(text) {
  const todoInput = document.querySelector("#newTodo");
  todoInput.value = text; // type in our task text
  const addTodoButton = document.querySelector("#addTodo");
  addTodoButton.click(); // submit the add todo form
  const todoList = document.querySelector("#todoList");
  const todoItem = todoList.firstElementChild;

  const reset = () => {
    // reset DOM so we don't impact other tests
    todoList.innerHTML = "";
  };
  return { todoItem, todoList, reset };
}

test("Submitting a new task adds it to the list", t => {
  const { todoItem, reset } = addTestTodo("test thing to do");
  const todoLabel = todoItem.querySelector("span");
  t.equal(
    todoLabel.textContent,
    "test thing to do",
    "New todo is added to the list"
  ); // our task should be inside the todo list

  reset();
});

test("Checking an entry marks it as complete", t => {
  const { todoItem, reset } = addTestTodo("test thing to do");
  const todoCheckbox = todoItem.querySelector("input[type='checkbox'");
  const todoLabel = todoItem.querySelector("span");
  todoCheckbox.click();

  const labelStyles = getComputedStyle(todoLabel);
  const textDecoration = labelStyles["text-decoration"];
  t.equal(
    textDecoration.includes("line-through"),
    true,
    "Label should have strikethrough applied"
  );

  reset();
});

test("Deleting an entry removes it from the list", t => {
  const { todoItem, todoList, reset } = addTestTodo("test thing to do");
  const deleteTodoButton = todoItem.querySelector("button");
  deleteTodoButton.click();
  t.equal(
    todoList.children.length,
    0,
    "List should have no tasks items inside"
  );

  reset();
});

test("Toggling the filter hides completed tasks from the list", t => {
  const { todoItem, reset } = addTestTodo("test thing to do");
  const todoCheckbox = todoItem.querySelector("input[type='checkbox'");
  todoCheckbox.click();

  const filterCheckbox = document.querySelector("#filterComplete");
  filterCheckbox.click();

  t.equal(
    todoItem.hidden,
    true,
    "Checked task should be hidden from todo list"
  );

  filterCheckbox.checked = false;
  reset();
});
