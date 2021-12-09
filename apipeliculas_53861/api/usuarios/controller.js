const express = require('express');
const controladorUsuarios = express.Router();

/**
 * TODO: GET    -> LOGIN.
 * TODO: GET    -> OBTENER UN USUARIO POR EL ID.
 */

controladorUsuarios.get("/iniciarSesion",function(req,res){
    let datos = req.query;
    res.send("Los datos del usuario son: \n" + datos.usuario + " " + datos.contrasena);
});




module.exports = controladorUsuarios;