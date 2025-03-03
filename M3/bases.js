/* VARIABLES Y TIPOS DE DATOS */
//Declaración de una variable y asignación de valor a una variable
var oracion = "No usar var porque es antiguo"; /*💀 VAR ya no se usa  */
let oracionNueva = "Esto si se usa"; /* ✅ variable con LET */
const oracionNueva2 =
  "Esto tambien se usa pero no siempre "; /* variable con CONST : no se le puede reasignar el valor */

/* Declaración de una variable VS Asignación de un valor VS Reasignación de un valor a una variable */
let cadenaDeTexto; /* 💀 Declaración de la variable=> su valor por el momento undefined */
cadenaDeTexto =
  "Esto es un string"; /* Asignación de valor de una variable, luego de su declaración */

let numero = 5; /* ✅ Declaración y asignación de valor a una variable */
numero = 10; /* Reasignación de valor */

/* -----------------------TIPOS DE DATOS------------------------- */
/* STRING => siempre declarado su valor entre "" , '' , `` */
let frase = "Hola  ¿Como  estas?, amiguit@"; //String
let letra = "d"; //String
let caracter = "5"; //String
let caracter2 = "%"; //String
let caracter3 = "-"; //String
let caracterBoolean = "true"; //String

/* NUMERO => Sin comillas */
let entero = 10; //Number
let decimal = 2.5; //Number
let negativo = -2; //Number
let negativoDecimal = -2.5; //Number
let notAnumber = NaN; //Number
let soyUnNumeroRaro = NaN; //Not a Number => es un número

/* BOOLEANOS => VERDADERO/FALSO | ENCENDIDO/APAGADO  | SI/NO */
let verdadero = true; //Boolean
let falso = false; //Boolean

/* NULL */
let nulo = null; //Null => null indica que su valor es nulo

/* UNDEFINED */
let indefinido = undefined; //💀 Undefined

/* ARRAY */
let arrayNuevo = [];

/* OBJETOS */

let objetoNuevo = {};

/* -----------------------OPERADORES MATEMÁTICOS------------------------- */
/* Las operaciones matemáticas arrojan un valor de salida único */
let numeroFavorito = 22;

let suma = numeroFavorito + 2; //24
let resta = 5 - 5; // 0
let multipliacion = 5 * 5; //25
let potencia = 2 ** 3; // 8
let division = 25 / 5; // 5

let residuoDeDivison = 20 % 5; // 25/5 => 0 sin resto
console.log(residuoDeDivison);

let esPar = 3 % 2; /* Si da 0 es par, sino es impar */

/* -----------------------OPERADORES RELACIONALES / DE COMPARACIÓN------------------------- */
/* Mayor que=> compara si el valor izquierdo es mayor que el derecho */
let mayorQueYo = 15 > 10; //true
let mayorQue = 5 > 10; //false
let esMayorQue = 10 > 10; //false

/* Menor que=> compara si el valor izquierdo es menor que el derecho */
let menorQue = 5 < 10; //true
let esMenorQue = 5 < 5; //false

/* Menor o igual que=> compara si el valor izquierdo es menor o igual que el derecho */
let menorOIgualQue = 5 <= 10; //true
let esMenorOIgualQue = 5 <= 5; //true

/* Mayor o igual que=> compara si el valor izquierdo es mayor o igual que el derecho */
let mayorOIgualQue = 5 >= 10; //false
let esMayoroIgualQue = 10 >= 10; //true

/* Igualdad => compara si los dos valores son iguales, sin importar el tipo de dato */
let sonIguales = 5 == 5; // true
let sonIguales2 = "5" == "5"; // true
let sonIguales3 = 555 == "456"; // false
let sonIguales4 = 555 == "555"; // true
let sonIguales5 = "555" == 555; // true
let sonIguales6 = "Rojo" == "rojo"; //false
