const express = require('express');
const controladorPeliculas = express.Router();

/**
 * TODO: GET    -> OBTENER TODAS LAS PELÍCULAS.
 * TODO: GET    -> OBTENER UNA PELÍCULA POR EL ID.
 * TODO: GET    -> BUSCAR PELÍCULAS POR EL TÍTULO.
 * TODO: POST   -> CREAR PELÍCULAS.
 * TODO: PUT    -> ACTUALIZAR PELÍCULAS.
 * TODO: DELETE -> ELIMINAR PELÍCULAS.
 */

controladorPeliculas.get("/obtenerPeliculas",function(req,res){
    // TODO: CAPTURAR LOS DATOS Y ENVIARLOS AL SERVICIO.

    res.status(200).send("Listado de Películas...");
});








module.exports = controladorPeliculas;