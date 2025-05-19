//Ejercicio A
// 
// /*a. Corrige el siguiente código para que siga las buenas prácticas de JavaScript
// moderno (usa let y const en lugar de var) y asegúrate de que las variables no se
// puedan reasignar si no es necesario.
// */
// /*  Codigo principal */
// var nombre ="Armando";
// var edad = 25;

// nombre = "Ana Martinez";

// */ 
// var saludo = "Hola, soy " + nombre + ". Tienes" + edad + " años.";

//Codigo corregido
let nombre ="Armando";
const edad = 25;

nombre = "Ana Martinez";

let saludo = "Hola, soy " + nombre + ". Tienes " + edad + " años.";
//impreseion de saludo
console.log(saludo);

//b. Convierte esta función tradicional a una arrow function que haga exactamente lo mismo:
//function cuadrado(numero) {
//    return numero * numero;
//}

//Codigo corregido
const cuadrado = (numero) => {
    return numero * numero;
}
//impreseion de cuadrado
console.log(cuadrado(5));
console.log(cuadrado(8));
console.log(cuadrado(9));


//Ejercicio C
//Crea un arrow function llamada saludoPersonalizado que reciba dos parametros: nombre y edad y retorne una cadena como la siguiente*/
/* 
"Hola, me llamo Marlen y tengo 25 años."
*/
//Codigo 
const saludoPersonalizado = (nombre, edad) => {
    return "Hola, me llamo " + nombre + " y tengo " + edad + " años.";
}
//impreseion de saludoPersonalizado
console.log(saludoPersonalizado("Mar", 20));



