/* Defino una función con los parametros que necesito */
function pintar(color = "red", fuente = null, etiqueta = "body") {
  elemento = document.querySelector(etiqueta); //=>"body"
  elemento.style.backgroundColor = color; //=>red
  if (fuente !== null) {
    elemento.style.fontFamily = fuente; //=> null
  }
}

pintar(); //=> le paso por parametro el color que quiera
