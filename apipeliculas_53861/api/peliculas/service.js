/**
 *      Servicio es la Manipulación de datos -> Lógica del Negocio.
 *          -> Recibe acción desde el Controlador.
 *          -> Ejecuta la acción.
 *              -> Consultar datos al modelo.
 *              -> Realiza operaciones matemáticas, lógicas con los datos.
 *          -> Envía los resultados de la acción al controlador.
 */

const controladorPeliculas = require('./controller');
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

async function obtenerPeliculasTitulo(nombre,exacta = false){
    // Validar que el id no sea nulo, undefined o vacío.
    if(nombre){
        let peliculas = await modeloPeliculas.bucarPorTitulo(nombre,exacta);
        if(peliculas){
            return peliculas;
        }else{
            return "ID no existe en la base de datos"
        }
    }else{
        return "Ingrese por favor un ID"
    }
};

async function crearPelicula(pelicula){
    let resultado = {};
    // pelicula  -> null,undefined.
    // Objecto vacio -> longitud es 0 -> conocer sus llaves.
    
    if( pelicula && Object.keys(pelicula).length > 0 ){
        if(pelicula.titulo && pelicula.titulo !== ""){
            let busqueda = await obtenerPeliculasTitulo(pelicula.titulo, true);
            if(busqueda.length === 0){
                let crearResultado = await modeloPeliculas.crearUna(pelicula);
                /**
                 *  {
                 *      "acknowledged":true/false,
                 *      "inserted":id/null
                 *  }
                 */
                if(crearResultado && crearResultado.acknowledged){
                    resultado.mensaje = "Película Creada Exitosamente.",
                    resultado.data = crearResultado;
                }else{
                    resultado.mensaje = "Error al insertar película.",
                    resultado.data = pelicula
                }
            }else{
                resultado.mensaje = "Película ya existe.";
                resultado.data = pelicula.titulo;
            }
        }else{
            resultado.mensaje = "Título no existe o vacío.";
            resultado.data = pelicula;
        }
    }else{
        resultado.mensaje = "No hay datos para insertar."
    }

    return resultado;

};

async function actualizarPelicula(id,nuevosDatos){
    /**
     *  1. Longitud es exactamente igual a 24. -> length
     *  2. Número del 0-9, letras A-F -> /^[0-9A-F]+$/i
     */
    let resultado = {};
    if(id.length == 24 && /^[0-9A-F]+$/i.test(id)){
        // TODO: Validar los nuevos datos.
        let actualizarResultado = await modeloPeliculas.actualizarUna(id,nuevosDatos);
        if(actualizarResultado && actualizarResultado.acknowledged){
            resultado.mensaje = "Película actualizada correctamente",
            resultado.data = actualizarResultado;
        }else{
            resultado.mensaje = "Error al actualizar película",
            resultado.data = {"id":id, "datos":nuevosDatos}
        };
    }else{
        resultado.mensaje = "ID inválido",
        resultado.data = id;
    };
    return resultado;
};

async function eliminarPelicula(id){
    let resultado = {};
    console.log(id);
    if(id && id.length == 24 && /^[0-9A-F]+$/i.test(id)){
        let resultadoEliminar = await modeloPeliculas.eliminarUna(id);
        if(resultadoEliminar && resultadoEliminar.acknowledged){
            resultado.mensaje = "Película eliminada correctamente.";
            resultado.datos = resultadoEliminar;
        }else{
            resultado.mensaje = "Error al eliminar película";
            ressultado.datos = id
        }
    }else{
        resultado.mensaje = "ID inválido.",
        resultado.datos = id
    };

    return resultado;
};


module.exports.obtenerPeliculas = obtenerPeliculas;
module.exports.obtenerPelicula = obtenerPelicula;
module.exports.obtenerPeliculasTitulo = obtenerPeliculasTitulo;
module.exports.crearPelicula = crearPelicula;
module.exports.actualizarPelicula = actualizarPelicula;
module.exports.eliminarPelicula = eliminarPelicula;

/**
 *  Cómo funciona el module.export:
 * 
 *  Objecto{
 *      "obtenerPeliculas":function obtenerPeliculas(),
 *      "buscarPeliculasTitulo":function buscarPeliculasTitulo(),
 *      ...  
 *  };
 */
