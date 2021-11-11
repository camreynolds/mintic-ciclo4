const express               = require('express');
const controladorUsuarios   = express.Router();

/**
 *      GET: Login.
 *      GET: Obtener usuario por id.
 */

 controladorUsuarios.post("/iniciarsesion",function(req,res){
    // Capturar los datos, y enviarlos al servicio.
    let datos = req.query;
    res.send("Los datos del usuario son: " + datos.usuario + " - " + datos.contrasena);
});

module.exports = controladorUsuarios;