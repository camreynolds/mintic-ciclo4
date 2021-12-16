const express = require('express');
const controladorPeliculas = express.Router();
const servicioPeliculas = require('./service');

/**
 * TODO: GET    -> OBTENER TODAS LAS PELÍCULAS.
 * TODO: GET    -> OBTENER UNA PELÍCULA POR EL ID.
 * TODO: GET    -> BUSCAR PELÍCULAS POR EL TÍTULO.
 * TODO: POST   -> CREAR PELÍCULAS.
 * TODO: PUT    -> ACTUALIZAR PELÍCULAS.
 * TODO: DELETE -> ELIMINAR PELÍCULAS.
 */

controladorPeliculas.get("/obtenerPeliculas",async function(req,res){
    // TODO: CAPTURAR LOS DATOS Y ENVIARLOS AL SERVICIO.

    let peliculas = await servicioPeliculas.obtenerPeliculas();
    res.send({
        'mensaje': "Listado de Películas",
        'data': peliculas
    });
});

module.exports = controladorPeliculas;