const express               = require('express');
const controladorPeliculas  = express.Router();
const servicioPeliculas     = require('./service');

/**
 *      GET: Obtener todas las peliculas.
 *      GET: Obtener una pelicula por el id.
 *      GET: Obtener peliculas por el título.
 * 
 *      POST: Crea películas.
 *      PUT: Actualiza películas.
 *      DELETE: Elimina películas.
 */

controladorPeliculas.get("/obtenerpeliculas",async function(req,res){
    // Capturar los datos, y enviarlos al servicio.
    let peliculas = await servicioPeliculas.obtenerPeliculas();
    res.send({
        "mensaje":"Listado de peliculas",
        "data":peliculas
    });
});

module.exports = controladorPeliculas;