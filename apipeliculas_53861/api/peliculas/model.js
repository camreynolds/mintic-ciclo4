const { ObjectId } = require('mongodb');
const basedatos = require('../../database/connection');
const objectId = require('mongodb').ObjectId;

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

function buscarPorId(id){
    let db = basedatos.obtenerConexion();

    return db.collection("peliculas").findOne({"_id": objectId(id)})
        .then(function(data){
            return data;
        })
        .catch(function(error){
            console.log(error);
        });
};

async function buscarPorTitulo(nombre){
    let db = basedatos.obtenerConexion();

    return await db.collection("peliculas").find({"titulo":new RegExp(nombre,"i")}).toArray()
        .then(function(data){
            return data;
        })
        .catch(function(error){
            console.log(error);
        });
};

module.exports.buscarTodos      = buscarTodos;
module.exports.buscarPorId      = buscarPorId;
module.exports.buscarPorTitulo  = buscarPorTitulo;