const animales = [
  "perro",
  "gato",
  "elefante",
  "león",
  "tigre",
  "oso",
  "jirafa",
  "mono",
]; //comienza con 8

/* PUSH => Agrega elementos al final del array */
let mi_animal_al_final = "lobo";
animales.push(mi_animal_al_final);

/* UNSHIFT =>  Agrega elementos al principio del array */
let mi_animal_al_principio = "capibara";
animales.unshift(mi_animal_al_principio);

console.log("antes del pop Y shift", animales);

/* POP => Elmina el último elemento del array */
animales.pop();
console.log("despues del pop", animales);

/* SHIFT => Elmina el primer elemento del array */
animales.shift();
console.log("despues del shift", animales);

/* -------------------------------------------- */

// const superHeroes = ["Ironman", "Superman", "Hawkeye"];



/*  */const cocteles = ["Piñacolada", "Margarita", "Mojito", "Caipirinha", "Cerveza"]
//  index =>              0              1          2            3           4          
//                                                               ↑                                  
const elementoAEliminar = "Caipirinha"
const index = cocteles.findIndex((coctel) => coctel === elementoAEliminar) //busco el indice del elemento a eliminar


cocteles.splice(index, 1)//se le da un punto de partida y elementos a elminar desde ese punto

console.log(cocteles)