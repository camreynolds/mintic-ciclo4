const jwt = require('jsonwebtoken');
require('dotenv').config();

/**
 * 
 * @param {id,nombre,roles} usuario 
 */
function crearToken(usuario){
    const payload = {
        "id":       usuario._id,
        "nombre":   usuario.nombre,
        "roles":    usuario.roles
    };
    const token = jwt.sign(payload,process.env.JWT_CLAVE,{expiresIn: process.env.JWT_EXPIRE});

    return token;
};

/**
 *  MIDDLEWARE -> SE EJECUTA ENTES DE LA ACCIÓN FINAL.
 *      -> CAPTURAR LA PETICIÓN Y VALIDAR.
 *          1. SI EXISTE EL TOKEN.
 *          2. SI EL TOKEN ES VÁLIDO.  
 */
function validarToken(req,res,next){
    let token = undefined;
    if(req.headers['authorization']){
        token = req.headers['authorization'].split(" ").pop();
    }

    if(token){
        jwt.verify(token,process.env.JWT_CLAVE,function(error,datos){
            if(error){
                res.status(401).send({"mensaje":"Token inválido"});
            }
            else{
                console.log(datos);
                req.usuario = datos;
                console.log(req.usuario);
                next();
            }
        });
    }
    else{
        res.status(403).send({"mensaje":"Sin autorización."});
    }
};

module.exports.crearToken   = crearToken;
module.exports.validarToken = validarToken;