/**
 *      EXPLICACIÓN PROFESOR:
 * 
 *      EXPRESS -> Nodejs
 *          -> http.createServer( request,response ){
 *                  request.url === "obtenerPeliculas";
 *                  express.controlador.Peliculas.get.function(request,response);
 *              };
 * 
 *      SOBRECARGA DE MÉTODOS:
 *          -> function(err,req,res,next);
 *          -> function(err,req,res);
 *          -> function(req,res);
 */

const express               = require('express');
const controladorPeliculas  = express.Router();
const servicioPeliculas     = require('./service');
const rutaProtegida         = require('../auth/jwt').validarToken;

/**
 * TODO     GET:    Obtener todas las peliculas.
 * TODO     GET:    Obtener una pelicula por el id.
 * TODO     GET:    Obtener peliculas por el título.
 * TODO     POST:   Crea películas.
 * TODO     PUT:    Actualiza películas.
 * TODO     DELETE: Elimina películas.
 */

/**
 *      Controlador es la Entrada/Salida del sistema.
 *          -> Recibe datos de entrada -> request.
 *          -> Envía al servicio las entrada.
 *          -> Recibe del servicio datos transformados.
 *          -> Envía respuesta al cliente. 
 */

/**
 * Controlador para buscar todas las películas.
 */
controladorPeliculas.get("/obtenerpeliculas",async function(req,res){
    // Capturar los datos, y enviarlos al servicio.
    let peliculas = await servicioPeliculas.obtenerPeliculas();
    res.send({
        "mensaje":"Listado de peliculas",
        "data":peliculas
    });
});

/**
 * Controlador para buscar una película por id.
 * @param Requiere: id
 */
controladorPeliculas.get("/obtenerPelicula/:id", rutaProtegida,async function(req,res){
    let id          = req.params.id;
    let pelicula    = await servicioPeliculas.obtenerPelicula(id);

    res.send({
        "mensaje":"Detalle de la película",
        "data":pelicula
    });
});

/**
 * Controlador para buscar una películas por título.
 * @param Requiere: título
 */
controladorPeliculas.get("/obtenerPeliculasTitulo/:nombre", rutaProtegida,async function(req,res){
    let nombre      = req.params.nombre;
    let peliculas   = await servicioPeliculas.obtenerPeliculasTitulo(nombre);

    res.send({
        "mensaje":"Detalle de las películas",
        "busqueda por": nombre,
        "data":peliculas
    });
});

/**
 * Controlador para crear una película.
 * @param Requiere: 
 */
controladorPeliculas.post("/crearPelicula", rutaProtegida,async function(req,res){
    let pelicula = req.body;
    let resultado = await servicioPeliculas.crearPelicula(pelicula);

    res.send(resultado);
});

controladorPeliculas.put("/actualizarPelicula/:id",rutaProtegida,async function(req,res){
    let id = req.params.id;
    let nuevosDatos = req.body;
    let resultado = await servicioPeliculas.actualizarPelicula(id,nuevosDatos);
    res.send(resultado);
})

/**
 * Eliminar película por id.
 * @param Requiere: id
 * 
 * se realizará a través del query-string
 * http://localhost:3300/api/peliculas/eliminarPelicula?id=xxx
 */
 controladorPeliculas.delete("/eliminarPelicula",rutaProtegida, async function(req,res){
    let id = req.query.id;
    let resultado = await servicioPeliculas.eliminarPelicula(id);
    res.send(resultado);
});

module.exports = controladorPeliculas;