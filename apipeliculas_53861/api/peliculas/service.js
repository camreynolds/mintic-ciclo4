/**
 *      Servicio es la Manipulación de datos -> Lógica del Negocio.
 *          -> Recibe acción desde el Controlador.
 *          -> Ejecuta la acción.
 *              -> Consultar datos al modelo.
 *              -> Realiza operaciones matemáticas, lógicas con los datos.
 *          -> Envía los resultados de la acción al controlador.
 */

const modeloPeliculas = require('./model');

async function obtenerPeliculas(){
    let peliculas = await modeloPeliculas.buscarTodos();
    return peliculas;
};

async function obtenerPelicula(id){
    // Validar que el id no sea nulo, undefined o vacío.
    if(id){
        let pelicula = await modeloPeliculas.bucarPorId(id);
        if(pelicula){
            return pelicula;
        }else{
            return "ID no existe en la base de datos"
        }
    }else{
        return "Ingrese por favor un ID"
    }
};

async function obtenerPeliculasTitulo(nombre){
    // Validar que el id no sea nulo, undefined o vacío.
    if(nombre){
        let peliculas = await modeloPeliculas.bucarPorTitulo(nombre);
        if(peliculas){
            return peliculas;
        }else{
            return "ID no existe en la base de datos"
        }
    }else{
        return "Ingrese por favor un ID"
    }
};

module.exports.obtenerPeliculas = obtenerPeliculas;
module.exports.obtenerPelicula = obtenerPelicula;
module.exports.obtenerPeliculasTitulo = obtenerPeliculasTitulo;