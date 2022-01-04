const express = require('express');
const controladorUsuarios = express.Router();
const servicioUsuarios = require("./service");

/**
 * TODO: GET    -> LOGIN.
 * TODO: POST   -> CREAR USUARIO.
 */

/**
 *  CONTROLADOR PARA INICIAR SESIÓN.
 */
controladorUsuarios.get("/iniciarSesion",async function(req,res){
    let datos = req.query;
    let resultado = await servicioUsuarios.iniciarSesion(datos);
    res.send(resultado);
});

/**
 *  CONTROLADOR PARA CREAR USUARIO.
 */
controladorUsuarios.post("/crearUsuario",async function(req,res){
    let nuevoUsuario = req.body;
    let resultado = await servicioUsuarios.crearUsuario(nuevoUsuario);
    res.send(resultado);
});


module.exports = controladorUsuarios;