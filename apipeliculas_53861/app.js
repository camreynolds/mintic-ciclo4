/**
 * @param Requerido: Importar los módulos.
 */
const express               = require('express');
const bodyParser            = require('body-parser');
const morgan                = require('morgan');
const cors                  = require('cors');
const compression           = require('compression');
const helmet                = require('helmet');
const controladorPeliculas  = require('./api/peliculas/controller');
const controladorUsuarios   = require('./api/usuarios/controller');
const basedatos             = require('./database/connection');
require('dotenv').config();

/**
 *      NODE -> CREA UN OBJETO LLAMADO "process".
 *          process.env.PORT
 */

// Se crea una instancia de "express", he iniciar la configuración.
const app   = express();
// app.use(cors({origin:"www.midominio.com","www.midominios.com"}));
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true})); // Para formularios. Convierte el form-data en json 
app.use(morgan(process.env.MORGAN_MODE));
const port  = process.env.PORT;


// Se inicia las rutas.
app.use("/api/peliculas",controladorPeliculas);
app.use("/api/usuarios",controladorUsuarios);

// Configurar en dónde el API va a estar escuchando las peticiones.
basedatos.conectar()
    .then(function(){
        app.listen(port,function(){
            console.log("API ejecutandose en puerto: " + port);
            // console.log(basedatos.obtenerConexion());
        });
    })
    .catch(function(error){
        console.log("Se presento un error al conectar a la BASE DE DATOS");
        console.log(error);
    });

// app.listen(port,function(){
//     console.log("API ejecutandose en puerto: " + port);
// });