const express               = require('express');
const controladorUsuarios   = express.Router();
const servicioUsuarios      = require("./service");

/**
 *      GET: Login.
 *      GET: Obtener usuario por id.
 */

 controladorUsuarios.get("/iniciarsesion",async function(req,res){
    // Capturar los datos, y enviarlos al servicio.
    let datos = req.query;
    let resultado = await servicioUsuarios.iniciarSesion(datos);
    res.send(resultado);
});

/**
 *      nuevoUsuario = {
 *          "nombre":"xxxx",
 *          "usuario":"xxxx",
 *          "clave":"xxxx", -> Encriptar
 *          "roles":["A","B"],
 * 
 *      }
 */

/**
 *      Crear usuario.
 */
controladorUsuarios.post("/crearUsuario", async function(req,res){
    let nuevoUsuario    = req.body;
    let resultado       = await servicioUsuarios.crearUsuario(nuevoUsuario);
    res.send(resultado);
});



module.exports = controladorUsuarios;