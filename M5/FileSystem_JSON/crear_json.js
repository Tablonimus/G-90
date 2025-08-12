const fs = require("fs"); // Importación de un modulo que ya viene con node

const filePath = "./archivos/tareas.json";

const tareas = [
  { text: "Ir al gimnasio" },
  { text: "Buscar al niño al colegio" },
  { text: "Pagar los gastos comunes" },
  { text: "Pasear al perro" },
];

const data = JSON.stringify(tareas); // función que me convierte un objeto ó array en String para crear un JSON.

/* Creación sincrónica del archivo */
fs.writeFileSync(filePath, data); // Primer parámetro: nombre del archivo | segundo parametro: la data que se escribe en el archivo

console.log("Fin del programa.")