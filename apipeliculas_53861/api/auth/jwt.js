const jwt = require('jsonwebtoken');
require('dotenv').config();

/**
 * @param require: id,nombre,roles 
 */
function crearToken(usuario){
    const payload = {
        "id"        :usuario._id,
        "nombre"    :usuario.nombre,
        "roles"     :usuario.roles
    };

    const token = jwt.sign(payload,process.env.JWT_CLAVE,{expiresIn: process.env.JWT_EXPIRE});

    return token;
};

/* MIDLEWARE -> ANTES DE LA ACCIÓN FINAL.
    -> CAPTURA LA PETICIÓN Y VALIDA.
        1. SI EXISTE EL TOKEN.
        2. SI EL TOKEN ES VÁLIDO
*/
function validarToken(req,res,next){
    let token = undefined;

    if(req.headers['authorization']){
        token = req.headers['authorization'].split(" ").pop();
    };

    if(token){
        jwt.verify(token,process.env.JWT_CLAVE, function(error,datos){
            if(error){
                res.status(401).send({"mensaje":"Token inválido."});
            }else{
                req.usuario = datos;
                next();
            }
        })
    }else{
        res.status(403).send({"mensaje":"Sin autorización"})
    }
};


module.exports.crearToken = crearToken;
module.exports.validarToken = validarToken;