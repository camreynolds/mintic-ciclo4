const modeloPeliculas = require('./model');

async function obtenerPeliculas(){
    let peliculas = await modeloPeliculas.buscarTodos();
    return peliculas;
};

async function obternerPelicula(id){
    // VALIDAR QUE EL ID NO SEA NULL, UNDEFINED, O VACÍO.
    if(id.length == 24){
        let pelicula = await modeloPeliculas.buscarPorId(id);
        if(pelicula){
            return pelicula
        }else{
            return "ID no existe en la base de datos."
        };
    }else{
        return "Ingrese por favor un ID."
    }
};

async function buscarPeliculasTitulo(nombre){
    let peliculas = await modeloPeliculas.buscarPorTitulo(nombre);
    return peliculas;
};

module.exports.obtenerPeliculas         = obtenerPeliculas;
module.exports.obtenerPelicula          = obternerPelicula;
module.exports.buscarPeliculasTitulo    = buscarPeliculasTitulo;