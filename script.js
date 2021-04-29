// Init variable
let todoList = [];
let inputTodoList = document.getElementById("input_field");
let todoListContainer = document.getElementById("todo_list_container");

function getData() {
  // Empty the container first
  todoListContainer.innerHTML = "";

  // Then fill the container with value
  todoList.forEach((value, i) => {
    todoListContainer.innerHTML += `
      <p id="${value + i}" onclick="removeData('${value}')">
        ${value}
      </p>
    `;
  });
}

function createData() {
  // Asign the todo list value to  todo list array
  todoList.push(inputTodoList.value);

  // After that, clear the input field
  // and update the data in container
  inputTodoList.value = "";
  getData();
}

function removeData(listValue) {
  // Array for contain temporary filtered data
  let tempTodoList = [];

  // Filter the data & assign the temporary array to todo list array
  todoList.forEach((value) => {
    if (listValue !== value) {
      tempTodoList.push(value);
    }
  });
  todoList = tempTodoList;

  // After that update the data in container
  getData();
}

// This event for save button and trigger save function
document.getElementById("save_button").addEventListener("click", () => {
  createData();
});
