const fs = require("fs"); // Importación de un modulo que ya viene con node

const filePath = "./archivos/tareas.txt";
const tareas = `
 1. Ir al gimnasio
 2. Buscar al niño al colegio
 3. Pagar los gastos comunes
 4. Programar
`;

fs.writeFileSync(filePath, tareas); // Primer parámetro: nombre del archivo | segundo parametro: la data que se escribe en el archivo
