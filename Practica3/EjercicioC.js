//funcion
function simularPeticionAPI(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Datos recibidos correcttamente");
        }, 5000);
    });
} 

async function obtenerDatos(){
    //uso de await para esperar la promesa De la funcion simularPeticionAPI
    const datos = await simularPeticionAPI();
    //imprimir el resultado
    console.log(datos);         
}
//uso de la funcion async
obtenerDatos();

