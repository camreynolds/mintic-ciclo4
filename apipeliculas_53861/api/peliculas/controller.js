const express = require('express');
const controladorPeliculas = express.Router();
const servicioPeliculas = require('./service');

/**
 * TODO: GET    -> OBTENER TODAS LAS PELÍCULAS.     - OK!
 * TODO: GET    -> OBTENER UNA PELÍCULA POR EL ID.  - OK!
 * TODO: GET    -> BUSCAR PELÍCULAS POR EL TÍTULO.  - OK!
 * TODO: POST   -> CREAR PELÍCULAS.
 * TODO: PUT    -> ACTUALIZAR PELÍCULAS.
 * TODO: DELETE -> ELIMINAR PELÍCULAS.
 */

/**
 * CONTROLADOR PARA BUSCAR TODAS LAS PELÍCULAS.
 */
controladorPeliculas.get("/obtenerPeliculas",async function(req,res){
    // TODO: CAPTURAR LOS DATOS Y ENVIARLOS AL SERVICIO.

    let peliculas = await servicioPeliculas.obtenerPeliculas();
    res.send({
        'mensaje': "Listado de Películas",
        'data': peliculas
    });
});

/**
 * CONTROLADOR PARA BUSCAR UNA PELÍCULA POR ID.
 */
controladorPeliculas.get("/obtenerPelicula/:id",async function(req,res){
    let id          = req.params.id;
    let pelicula    = await servicioPeliculas.obtenerPelicula(id);
    res.send({
        "mensaje": "Detalle de la película",
        "data": pelicula
    });
});

/**
 * CONTROLADOR PARA BUSCAR PELÍCULAS POR EL TÍTULO.
 */
controladorPeliculas.get("/buscarPeliculasTitulo/:nombre",async function(req,res){
    let nombre      = req.params.nombre;
    let peliculas   = await servicioPeliculas.buscarPeliculasTitulo(nombre);
    res.send({
        "mensaje": "Resultado de búsqueda.",
        "búsqueda": nombre,
        "data": peliculas  
    });
});

module.exports = controladorPeliculas;