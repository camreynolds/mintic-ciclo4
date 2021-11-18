const basedatos = require('../../database/connection');

async function crearUno(nuevoUsuario){
    let db = basedatos.obtenerConexion();

    return await db.collection("usuarios").insertOne(nuevoUsuario);
    
    //! Si se desea manejar algún error se podría realizar utilizando try / catch.
};

async function buscarPorUsuario(usuario){
    let db = basedatos.obtenerConexion();

    return await db.collection("usuarios").findOne({"usuario":usuario});

};

module.exports.crearUno         = crearUno;
module.exports.buscarPorUsuario = buscarPorUsuario;