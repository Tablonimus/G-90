/* Defino una función con los parametros que necesito */
function pintar(color, fuente, etiqueta) {
  elemento = document.querySelector(etiqueta); //=>"body"
  elemento.style.backgroundColor = color;
  if (fuente !== null) {
    elemento.style.fontFamily = fuente;
  }
}

/* El parámetro se usa al momento de invocar la función */
const color_favorito = "blue";
const fuente_favorita = "monospace";
const etiqueta = "body";

pintar(color_favorito, fuente_favorita, etiqueta); //=> le paso por parametro el color que quiera

/* FUNCIÓN CON UN IF */
// function pintar_con_if(color) {
//   console.log("El color elegido", color); //=>compruebo si le llega un color

//   elemento = document.querySelector("body");
//   elemento.style.backgroundColor = color;

//   if (color === "black") {
//     elemento.style.color = "white";
//   } else {
//     elemento.style.color = "yellow";
//   }
// }
