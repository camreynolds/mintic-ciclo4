const express               = require('express');
const controladorPeliculas  = express.Router();

/**
 *      GET: Obtener todas las peliculas.
 *      GET: Obtener una pelicula por el id.
 *      GET: Obtener peliculas por el título.
 * 
 *      POST: Crea películas.
 *      PUT: Actualiza películas.
 *      DELETE: Elimina películas.
 */

controladorPeliculas.get("/obtenerpeliculas",function(req,res){
    // Capturar los datos, y enviarlos al servicio.
    res.send("Listado de películas...");
});

module.exports = controladorPeliculas;