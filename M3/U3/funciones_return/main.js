const num1 = 10;
const num2 = 15;
/* Con la palabra return, puedo devolver(retornar) un dato que se encuentra o resuelve la función */
function sumar(num1, num2) {
  let suma = num1 + num2;
  return suma;
}

let resultado = sumar(num1, num2); //El resultado es igual a lo que retorna la función
console.log("Mi resultado es=> ", resultado);

function unirNombre(nombre, apellido) {
  let nombreCompleto = nombre + " " + apellido;
  return nombreCompleto;
}

let nombreYapellido = unirNombre("Lucas", "Perez");


console.log("Mi nombre es =>", nombreYapellido);
