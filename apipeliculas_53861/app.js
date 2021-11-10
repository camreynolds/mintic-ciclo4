/**
 * @param Requerido: Importar los módulos.
 */
const express = require('express');

// Se crea una instancia de "express", he iniciar la configuración.
const app   = express();
const port  = 3002;

// Se inicia las rutas.
app.get("/prueba", function(request,response){
    // Procesar la petición.
    let nombres = "Carlos Muñoz";
    // Enviar la respuesta.
    response.send(nombres)
});

app.get("/misiontic", function(request,response){
    response.send("Mi primer API 53861")
});

// Configurar en dónde el API va a estar escuchando las peticiones.
app.listen(port,function(){
    console.log("API ejecutandose en puerto: " + port);
});