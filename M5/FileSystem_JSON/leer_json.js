const fs = require("fs"); // Importación de un modulo que ya viene con node

/* Método/función de fs para leer un archivo */

const data = fs.readFileSync("./archivos/tareas.json", "utf8"); // leer el archivo guardado "SIN PARSEAR/EN STRING"

const tareas = JSON.parse(data); // La operación contraria a JSON.stringify() => JSON.parse() me convierte el string a un objeto JS.

console.log("1  typeof data:", typeof data); // comparamos tipos de datos para corroborar porque lo estoy parseando
console.log("2 typeof tareas:", typeof tareas); // comparamos tipos de datos para corroborar porque lo estoy parseando

console.log(
  tareas.forEach((tarea, index) =>
    console.log(`Tarea ${index + 1} : ${tarea.text}`)
  )
);

console.log("Fin del programa.");
