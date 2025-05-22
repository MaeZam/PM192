//uso de .find(), .forEach(), .reduce()

const personas = [
    {nombre: "Ana", edad: 22},
    {nombre: "Luis", edad: 35},
    {nombre: "Maria", edad: 28},
]

// .find() para encontrar una persona por su nombre en este caso vamos a busar a Luis
const personaEncontrada = personas.find((persona) => persona.nombre === "Luis");
console.log(personaEncontrada); 

// .forEach() para recorrer el arreglo de personas y mostrar su nombre y edad
personas.forEach((persona) => {
    console.log("Nombre: " + persona.nombre + ", Edad: " + persona.edad);
});

// .reduce() para sumar las edades de todas las personas
const sumaEdades = personas.reduce((acumulador, persona) => {
    return acumulador + persona.edad;
}, 0);
console.log("La suma de las edades es: " + sumaEdades);
