//uso de .map() y .find()

const productos =[
    {nombre: "laptop", precio: 120000},
    {nombre: "Mouse", precio: 250},
    {nombre: "Teclado", precio: 750},
    {nombre: "Monitor", precio: 3000},
]
// .map() para obtener un nuevo arreglo con los nombres de los productos
const nombres = productos.map((producto) => producto.nombre);
console.log(nombres);