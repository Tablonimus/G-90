// import {Perro} from "./functions"

const { Perro, saludoInicial, despedida } = require("./functions");

console.log("páso 0");
saludoInicial(); // Saludo a la gente

console.log("páso 1");
Perro.ladra(); // les muestro mi perro

console.log("páso 2");
Perro.morder(); // les muestro mi perro

despedida(); //Cierro el programa
