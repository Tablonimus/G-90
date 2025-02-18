console.log("INICIO");


/* IF ... ELSE IF.... ELSE IF.... ELSE... */
let color = prompt("De que color está el semáforo?");
// Rojo | Amarillo | Verde

if (color == "Rojo") {
  alert("STOP!🛑🚨");
} else if (color == "Amarillo") {
  alert("Precaución ⚠⚠");
} else if (color == "Verde") {
  alert("Adelante!💚");
} else {
  alert("PELIGRO! SEMAFORO DESCOMPUESTO");
}


console.log("FIN")
