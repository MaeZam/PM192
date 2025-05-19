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