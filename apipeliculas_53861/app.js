/**
 * IMPORTAR LOS MÓDULOS REQUERIDOS.
 */
const express               = require('express');
const bodyParser            = require('body-parser');   // CONVIERTE A JSON TODO LO QUE VENGA POR     
                                                        // EL CUERPO DE LA PETICIÓN.
const controladorPeliculas  = require('./api/peliculas/controller');
const controladorUsuarios   = require('./api/usuarios/controller');



/**
 * INICIAR CONFIGURACIÓN.
*/ 
const app   = express();
app.use(bodyParser.json()); // UTILIZAMOS .use PARA CARGAR EN LA CONFIGURACIÓN INICIAL
                            // DE EXPRESS EL MÉTODO .json DE LA LIBRERÍA body-parser.
app.use(bodyParser.urlencoded({extended: true}));   // CONVIERTE A json LOS DATOS QUE VIENEN DE UN 
                                                    // FORMULARIO EN FORMATO form-data.
const port  = 3300;

/**
 * INICIALIZACIÓN DE RUTAS.
 */
app.use("/api/peliculas",controladorPeliculas);
app.use("/api/usuarios",controladorUsuarios);


/**
 * CORRER EL SERVIDOR.
 * AQUÍ ES DONDE EL API ESTARÁ MONITOREANDO LAS PETICIONES.
 */
app.listen(port, function(){
    console.log("API ejecutándose en el puerto " + port);
});