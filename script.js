let todoList = [];
let inputText = document.getElementById("input_field");
let container = document.getElementById("todo_list_container");

function initDataToContainer() {
  container.innerHTML = "";
  todoList.forEach((value, i) => {
    container.innerHTML += `
      <p id="${value + i}" onclick="remove('${value}')">
        ${value}
      </p>
    `;
  });
}

function save() {
  todoList.push(inputText.value);
  inputText.value = "";
  initDataToContainer();
}

function remove(listValue) {
  let tempTodoList = [];
  todoList.forEach((value) => {
    if (listValue !== value) {
      tempTodoList.push(value);
    }
  });
  todoList = tempTodoList;
  initDataToContainer();
}

document.getElementById("save_button").addEventListener("click", () => {
  save();
});
