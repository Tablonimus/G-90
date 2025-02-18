const user_correcto = "admin";
const pass_correcto = "1234";

let username_input = document.getElementById("input-username");
let password_input = document.getElementById("input-password");
let submit_button = document.getElementById("submit-btn");

submit_button.addEventListener("click", () => {
  let username = username_input.value;
  let password = password_input.value;

  if (pass_correcto == password) {
    alert("Bienvenido a la web");
    submit_button.style.backgroundColor = "green";
  } else {
    alert("Credenciales incorrectas!");
    submit_button.style.backgroundColor = "red";
  }
});

// && user_correcto == username
