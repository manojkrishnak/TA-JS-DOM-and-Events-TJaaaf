let ul = document.querySelector(".todos");
let input = document.querySelector(".todo-item");
let btns = document.querySelectorAll("button");
let clearCompletedBtn = document.querySelector(".clear-completed");
let selectedClass = "";

input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    if (event.target.value !== "") {
      let newTodo = {
        name: event.target.value,
        completed: false,
      };
      let allTodos = getItemsFromLocalStorage();
      setItemsToLocalStorage([...allTodos, newTodo]);
      allTodos = getItemsFromLocalStorage();
      createUI(allTodos);
      event.target.value = "";
    } else {
      alert("Todo cannot be empty");
    }
  }
});

function getItemsFromLocalStorage() {
  return JSON.parse(window.localStorage.getItem("allTodos")) === null
    ? []
    : JSON.parse(window.localStorage.getItem("allTodos"));
}

function setItemsToLocalStorage(items) {
  window.localStorage.setItem("allTodos", JSON.stringify(items));
}

function clearCompletedTodos() {
  let allTodos = getItemsFromLocalStorage();
  let completedTodos = allTodos.filter((todo) => todo.completed);
  completedTodos.forEach((todo) => allTodos.splice(allTodos.indexOf(todo), 1));
  setItemsToLocalStorage(allTodos);
  createUI(allTodos);
}

function toggleCompleted(e) {
  let id = e.target.dataset.id;
  let allTodos = getItemsFromLocalStorage();
  allTodos[id].completed = !allTodos[id].completed;
  setItemsToLocalStorage(allTodos);
  allTodos = getItemsFromLocalStorage();
  createUI(allTodos);
  itemsRemainingCount();
}

function filterResults(event) {
  let allTodos = getItemsFromLocalStorage();
  let selectionCategory = event.target.className;
  selectedClass = selectionCategory;
  btns.forEach(function (btn) {
    if (btn.id === "selected") {
      btn.removeAttribute("id");
    }
    if (btn.className === selectedClass) {
      btn.setAttribute("id", "selected");
    }
  });

  if (selectionCategory === "all") {
    createUI(allTodos);
  } else if (selectionCategory === "active") {
    let filteredResult = allTodos.filter((todo) => todo.completed !== true);
    createUI(filteredResult);
  } else if (selectionCategory === "completed") {
    let filteredResult = allTodos.filter((todo) => todo.completed);
    createUI(filteredResult);
  }
}

//to fix count for descending order delete
function itemsRemainingCount() {
  let itemsRemainingCountElm = document.querySelector(".items-count");
  let allTodos = getItemsFromLocalStorage();
  let itemsRemaining = allTodos.reduce((acc, cv) => acc + cv.completed, 0);

  itemsRemainingCountElm.innerText = allTodos.length - itemsRemaining;
  if (itemsRemaining === 0) {
    document.querySelector(".clear-completed").style.display = "none";
  } else {
    document.querySelector(".clear-completed").style.display = "flex";
  }
}

function deleteTodo(e) {
  let allTodos = getItemsFromLocalStorage();
  let targetElmText = e.target.parentElement.innerText;
  let index = allTodos.findIndex((todo) => todo.name === targetElmText);
  allTodos.splice(index, 1);
  setItemsToLocalStorage(allTodos);
  createUI(allTodos);
}

function createUI(todos) {
  ul.innerHTML = "";
  todos.forEach(function (todo, index) {
    let li = document.createElement("li");
    li.classList.add("flex", "justify-sb", "align-ct");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = index;
    checkbox.checked = todo.completed;
    checkbox.setAttribute("data-id", index);
    checkbox.classList.add("input-checkbox");

    let label = document.createElement("label");
    label.innerText = todo.name;
    label.classList.add("label");
    label.for = index;

    if (checkbox.checked === true) {
      label.classList.add("finished");
    }

    let dummyDiv = document.createElement("div");
    dummyDiv.append(checkbox, label);

    let span = document.createElement("span");
    span.classList.add("span");
    let i = document.createElement("i");
    i.innerHTML = "X";
    i.classList.add("fas", "fa-times", "icon");

    checkbox.addEventListener("change", toggleCompleted);
    i.addEventListener("click", deleteTodo);
    [...btns].forEach((btn) => btn.addEventListener("click", filterResults));
    clearCompletedBtn.addEventListener("click", clearCompletedTodos);

    li.append(dummyDiv, i);
    ul.append(li);
    itemsRemainingCount();
  });
}

let todosData = getItemsFromLocalStorage();
createUI(todosData);
