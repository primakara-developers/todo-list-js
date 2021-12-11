if (localStorage.getItem("token")) {
  location.href = "./index.html";
}

const registerEmail = document.getElementById("register_email");
const registerPassword = document.getElementById("register_password");
const confirmRegisterPassword = document.getElementById(
  "confirm_register_password"
);

const registerFunction = async () => {
  showLoading();

  // API for send register data
  const response = await fetch(
    "https://shrouded-refuge-36665.herokuapp.com/api/users/register",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: registerEmail.value,
        password: registerPassword.value,
      }),
    }
  );
  const json = await response.json();

  Swal.close();

  console.log(json);

  if (json.email) {
    alert("Succesfully registered data");
    location.href = "./login.html";
  } else {
    swalAlert("error", json.message, "Oops...");
  }
};

document.getElementById("registerBtn").addEventListener("click", () => {
  if (
    registerEmail.value &&
    registerPassword.value &&
    confirmRegisterPassword.value &&
    registerPassword.value === confirmRegisterPassword.value
  ) {
    registerFunction();
  } else {
    swalAlert("error", "Wrong data or Password not match", "Oops...");
  }
});
