if (localStorage.getItem("token")) {
  location.href = "../index.html";
}

const email = document.getElementById("email");
const password = document.getElementById("password");

const loginFunction = async () => {
  Swal.fire({
    title: "loading...",
    showConfirmButton: false,
  });

  // API for send login data
  const response = await fetch(
    "https://shrouded-refuge-36665.herokuapp.com/api/users/login",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    }
  );
  const json = await response.json();

  Swal.close();

  if (json.token) {
    localStorage.setItem("token", json.token);
    location.href = "../index.html";
  } else {
    alert("Something wrong");
  }
};

// document.getElementById("loginBtn").addEventListener("click", () => {
//   loginFunction();
// });
