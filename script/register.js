const registerEmail = document.getElementById("register_email");
const registerPassword = document.getElementById("register_password");

const loginFunction = async () => {
  Swal.fire({
    title: "loading...",
    showConfirmButton: false,
  });

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

  if (json.email) {
    alert("Succesfully registered data");
    location.href = "./login.html";
  } else {
    alert("Something wrong");
  }
};

document.getElementById("registerBtn").addEventListener("click", () => {
  loginFunction();
});
