/**
 *      Modelo -> Gestiona la base de datos.
 *          -> Realiza consulta de los datos a petición de los servicios
  *             -> Lectura -> Selecciona
 *              -> Escribe.
 *              -> Actualiza.
 *              -> Elimina.
 *          -> Envía los resultados de la acción al controlador.
 */

const basedatos = require('../../database/connection');
const objectId  = require('mongodb').ObjectId;

function buscarTodos(){
    let db = basedatos.obtenerConexion();

    return db.collection("peliculas").find({}).toArray()
        .then(function(data){
            return data;
        })
        .catch(function(error){
            console.log(error);
        });
};

function bucarPorId(id){
    let db = basedatos.obtenerConexion();

    return db.collection("peliculas").findOne({"_id": objectId(id) })
        .then(function(data){
            return data;
        })
        .catch(function(error){
            console.log(error);
        });
};

function bucarPorTitulo(nombre,exacta){
    let db = basedatos.obtenerConexion();
    let busqueda;

    if(exacta){
        busqueda = nombre;
    }else{
        busqueda = new RegExp(nombre,"i");
    };

    return db.collection("peliculas").find({"titulo": busqueda}).toArray()
        .then(function(data){
            return data;
        })
        .catch(function(error){
            console.log(error);
        });
};

function crearUna(pelicula){
    let db = basedatos.obtenerConexion();
    return db.collection("peliculas").insertOne(pelicula)
        .then(function(resultado){
            return resultado;
        })
        .catch(function(error){
            console.log(error);
        })
};

function actualizarUna(id,nuevosDatos){
    let db = basedatos.obtenerConexion();

    return db.collection("peliculas").updateOne(
        {"_id":objectId(id)}, // Filtro.
        {"$set":nuevosDatos}, // Operación de actualización --- $set, $unset
    )
    .then(function(resultado){
        return resultado;
    })
    .catch(function(error){
        console.log(error);
    })
};


module.exports.buscarTodos      = buscarTodos;
module.exports.bucarPorId       = bucarPorId;
module.exports.bucarPorTitulo   = bucarPorTitulo;
module.exports.crearUna         = crearUna;
module.exports.actualizarUna    = actualizarUna;