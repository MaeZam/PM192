//funcion verificarUsuario

function verificarUsuario(usuario){
    return new Promise((resolve, reject) => {
        if(usuario === "admin"){
            resolve("acceso concedido");
        }else{
            reject("acceso denegado");
        }

    });
}


//uso .then() y .catch() para manejar el resultado
verificarUsuario("admin")
    .then(res => console.log(res)) //acceso concedido
    .catch(err => console.error(err)); 

    verificarUsuario("Ivan")
    .then(res => console.log(res)) 
    .catch(err => console.error(err)); //acceso denegado
    