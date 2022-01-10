const express = require('express');
const controladorPeliculas = express.Router();
const servicioPeliculas = require('./service');
const rutaProtegida     = require('../auth/jwt').validarToken;

/**
 * TODO: GET    -> OBTENER TODAS LAS PELÍCULAS.     - OK!
 * TODO: GET    -> OBTENER UNA PELÍCULA POR EL ID.  - OK!
 * TODO: GET    -> BUSCAR PELÍCULAS POR EL TÍTULO.  - OK!
 * TODO: POST   -> CREAR PELÍCULAS.                 - OK!
 * TODO: PUT    -> ACTUALIZAR PELÍCULAS.            - OK!      
 * TODO: DELETE -> ELIMINAR PELÍCULAS.              - OK!
 */

/**
 * CONTROLADOR PARA BUSCAR TODAS LAS PELÍCULAS.
 */
controladorPeliculas.get("/obtenerPeliculas",rutaProtegida,async function(req,res){
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
    console.log(id);
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
        "busqueda": nombre,
        "data": peliculas    
    });
});

/**
 * CONTROLADOR PARA CREAR PELÍCULAS
 */
controladorPeliculas.post("/crearPelicula",rutaProtegida,async function(req,res){
    let pelicula = req.body;
    let resultado = await servicioPeliculas.crearPelicula(pelicula);
    res.send(resultado);
});

/**
 *  CONTROLADOR PARA ACTUALIZAR PELÍCULA.
 *  @param REQUIRE: ID desde los parámetros.
 *  @param REQUIRE: NUEVOS DATOS desde el body.
 */
controladorPeliculas.put("/actualizarPelicula/:id",rutaProtegida,async function(req,res){
    let id = req.params.id;
    let nuevosDatos = req.body;
    let resultado = await servicioPeliculas.actualizarPelicula(id,nuevosDatos);
    res.send(resultado);
});

/**
 *  CONTROLADOR PARA ELIMINAR PELÍCULA.
 * @param REQUIRE: id
 */
controladorPeliculas.delete("/eliminarPelicula",rutaProtegida,async function(req,res){
    let id = req.query.id;
    let resultado = await servicioPeliculas.eliminarPelicula(id);
    res.send(resultado);
});



module.exports = controladorPeliculas;