// Init variable
let todoList = [];
let inputTodoList = document.getElementById("input_field");
let todoListContainer = document.getElementById("todo_list_container");

function showLoading() {
  Swal.fire({
    title: "loading...",
    showConfirmButton: false,
  });
}

async function getData() {
  // Get data from database
  const response = await fetch(
    "https://shrouded-refuge-36665.herokuapp.com/api/todos",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    }
  );
  todoList = await response.json();

  // Empty the container first
  todoListContainer.innerHTML = "";

  // Then fill the container with value
  todoList.forEach((value, i) => {
    todoListContainer.innerHTML += `
      <div
        id="${value.id}"
        class="card w-100 my-2"
      >
        <div class="card-body d-flex justify-content-between py-2">
            <p class="m-0">${i + 1}. ${value.title}</p>
          <button
            type="button"
            class="btn-close"
            aria-label="Close"
            onclick="removeData('${value.id}')"
          ></button>
        </div>
      </div>
    `;
  });

  Swal.close();
}

async function createData() {
  showLoading();

  // Asign the todo list value to API
  const response = await fetch(
    "https://shrouded-refuge-36665.herokuapp.com/api/todos",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        title: inputTodoList.value,
        description: "",
      }),
    }
  );

  // After that, clear the input field
  // and update the data in container
  inputTodoList.value = "";
  getData();
}

async function removeData(id) {
  showLoading();

  // Call API for delete data
  const response = await fetch(
    `https://shrouded-refuge-36665.herokuapp.com/api/todos/${id}`,
    {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    }
  );

  // After that update the data in container
  getData();
}

// This event for save button and trigger save function
document.getElementById("save_button").addEventListener("click", () => {
  createData();
});

// This event for logout button and clear all data in localStorage
document.getElementById("logout_button").addEventListener("click", () => {
  localStorage.clear();
  location.href = "./pages/login.html";
});

showLoading();
getData();
