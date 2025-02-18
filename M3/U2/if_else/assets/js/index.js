/* IF ... ELSE */
let edad_string = prompt("¿Cual es su edad?");
let edad = Number(edad_string);

// console.log(typeof edad_string);
// console.log(typeof edad);
console.log("Club de baile para mayores de 20");

//if (condicion) {codigo a ejecutar si se CUMPLE la condición} 
// else {codigo a ejecutar si NO se cumple la condición}

if (edad >= 20) {
  alert("Ya eres mayor, felicitaciones, puedes pasar!!!");
} else {
  alert("Eres joven, vete!");
}
