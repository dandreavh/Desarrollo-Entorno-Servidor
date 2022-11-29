// Primer ejercicio
const impresion = require("./impresion.js");

// Segundo ejercicio
const funciones = require("./funciones.js");
let suma = funciones.sumar(3,2);
let resta = funciones.restar(3,2);
let multiplicacion = funciones.multiplicar(3,2);
let division = funciones.dividir(6,2);
console.log("Con llamada a la función sumar: "+suma);
console.log("Con llamada a la función restar: "+resta);
console.log("Con llamada a la función multiplicar: "+multiplicacion);
console.log("Con llamada a la función dividir: "+division);

// Tercer ejercicio
const accionesArray = require("./arrays.js");
const miArray = ["hola","coca","cola", "adiós"];
let primera = accionesArray.primera(miArray);
let ultima = accionesArray.ultima(miArray);
let sizeArray = accionesArray.sizeArray(miArray);
console.log("Primer elemento del array: "+primera);
console.log("Último elemento del array: "+ultima);
console.log("Tamaño del array: "+sizeArray);