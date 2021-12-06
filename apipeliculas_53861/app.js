/**
 * IMPORTAR LOS MÓDULOS REQUERIDOS.
 */
const express = require('express');

/**
 * INICIAR CONFIGURACIÓN.
*/ 
const app   = express();
const port  = 3300;

/**
 * INICIALIZACIÓN DE RUTAS.
 */
app.get("/prueba", function(request,response){
    // PROCESAR LA PETICIÓN.
    let nombre = "Jimmy";
    response.send(nombre);
});

app.get("/misiontic",function(request,response){
    // PROCESAR LA PETICIÓN.
    response.send("Mi primer API 53861");
});

/**
 * AQUÍ ES DONDE EL API ESTARÁ MONITOREANDO LAS PETICIONES.
 */
app.listen(port, function(){
    console.log("API ejecutándose en el puerto " + port);
});