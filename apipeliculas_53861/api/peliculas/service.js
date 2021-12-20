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

async function buscarPeliculasTitulo(nombre,exacta=false){
    let peliculas = await modeloPeliculas.buscarPorTitulo(nombre,exacta);
    return peliculas;
};

async function crearPelicula(pelicula){
    let resultado = {};
    
    // Valida si en null o undefined.
    // Objecto vacío -> longitud es 0 -> conocer sus llaves.
    if(pelicula && Object.keys(pelicula).length > 0){ 
        if(pelicula.titulo && pelicula.titulo !== ""){
            let busqueda = await buscarPeliculasTitulo(pelicula.titulo,true);
            if(busqueda.length === 0){
                let crearResultado = await modeloPeliculas.crearUna(pelicula);

                // EL MÉTODO DE INSERTAR DEVUELVE EL SIGUIENTE OBJETO.
                /**
                 * {
                 *  "acknowledged": true/false,
                 *  "insertedId": id/null 
                 * }
                 * 
                 */
                
                if(crearResultado && crearResultado.acknowledged){
                    resultado.mensaje = "Película creada exitosamente.";
                    resultado.datos = crearResultado;
                }else{
                    resultado.mensaje = "Error al insertar película.";
                    resultado.datos = pelicula
                };
            }else{
                resultado.mensaje = "Película ya existe.";
                resultado.datos = pelicula.titulo;
            };
        }else{
            resultado.mensaje = "Título no existe o vacío.";
            resultado.datos = pelicula;
        };
    }else{
        resultado.mensaje = "No hay datos para insertar.";
    };
    return resultado;
};

async function actualizarPelicula(id,nuevosDatos){
    /**
     * @param REQUIRE: Validar el ID.
     * @param REQUIRE: El ID tiene una longitud exacta de 24 caracteres entre 0-9 y A-F.   
     */    
    let resultado = {};
    if(id.length && /^[0-9A-F]+$/i.test(id)){
        let actualizarResultado = await modeloPeliculas.actualizarUna(id,nuevosDatos);
        if(actualizarResultado && actualizarResultado.acknowledged){
            resultado.mensaje   = "Película actualizada correctamente."
            resultado.datos     = actualizarResultado;
        }else{
            resultado.mensaje   = "Error al actualizar película";
            resultado.datos     = {
                "id":id,
                "datos":nuevosDatos
            }
        }
    }else{
        resultado.mensaje   = "ID inválido.";
        resultado.datos     = id;
    };
    return resultado;
};

async function eliminarPelicula(id){
    let resultado = {};
    if(id && id.length == 24 && /^[0-9A-F]+$/i.test(id)){
        let resultadoEliminar = await modeloPeliculas.eliminarUna(id);
        if(resultadoEliminar && resultadoEliminar.acknowledged){
            resultado.mensaje = "Película eliminada correctamente.";
            resultado.datos = resultadoEliminar;
        }
        else{
            resultado.mensaje = "Error al eliminar película.";
            resultado.datos = id;
        }
    }
    else{
        resultado.mensaje = "ID inválido.";
        resultado.datos = id;
    }
    return resultado;
};

module.exports.obtenerPeliculas         = obtenerPeliculas;
module.exports.obtenerPelicula          = obternerPelicula;
module.exports.buscarPeliculasTitulo    = buscarPeliculasTitulo;
module.exports.crearPelicula            = crearPelicula;
module.exports.actualizarPelicula       = actualizarPelicula;
module.exports.eliminarPelicula         = eliminarPelicula;