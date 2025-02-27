let saludarBtn = document.getElementById("saludar-btn");
let despedirBtn = document.getElementById("despedir-btn");

function decir_hola(nombre) {
  console.log("HOLA " + nombre);
  alert("HOLA " + nombre);
}

function decir_chau() {
  console.log("ADIOS!!!");
  alert("ADIOS!!!");
}

function pintar_titulo() {
  let title = document.getElementById("title");
  title.style.color = "yellow";
}

/* Manera 1 */
saludarBtn.addEventListener("click", function () {
  decir_hola("Pedro");
  pintar_titulo();
});

/* Manera 2 */
// saludarBtn.addEventListener("click", decir_hola);
despedirBtn.addEventListener("click", decir_chau);