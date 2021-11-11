/**
 * @param Requerido: Importar los módulos.
 */
const express       = require('express');
const bodyParser    = require('body-parser');
const controladorPeliculas = require('./api/peliculas/controller');
const controladorUsuarios = require('./api/usuarios/controller');

// Se crea una instancia de "express", he iniciar la configuración.
const app   = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true})); // Para formularios. Convierte el form-data en json 
const port  = 3002;


// Se inicia las rutas.
app.use("/api/peliculas",controladorPeliculas);
app.use("/api/usuarios",controladorUsuarios);

// Configurar en dónde el API va a estar escuchando las peticiones.
app.listen(port,function(){
    console.log("API ejecutandose en puerto: " + port);
});