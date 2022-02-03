/**
 * IMPORTAR LOS MÓDULOS REQUERIDOS.
 */
const express               = require('express');
const bodyParser            = require('body-parser');   // CONVIERTE A JSON TODO LO QUE VENGA POR     
                                                        // EL CUERPO DE LA PETICIÓN.
const morgan                = require('morgan');
const cors                  = require('cors');
const helmet                = require('helmet');
const compression           = require('compression');
const jwt                   = require('jsonwebtoken');
const controladorPeliculas  = require('./api/peliculas/controller');
const controladorUsuarios   = require('./api/usuarios/controller');
const basedatos             = require('./database/connection');
const path                  = require('path'); // MÓDULO DE NODEJS QUE PERMITE RESOLVER LAS RUTAS DE LOS 
const { join } = require('path');
                                               // ARCHIVOS QUE SE ENCUENTRAN EN EL SERVIDOR DE MANERA 
                                               // CORRECTA, INDEPENDIENTEMENTE DEL SO.

require('dotenv').config();

/**
 * INICIAR CONFIGURACIÓN.
*/ 
const app   = express();
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(bodyParser.json()); // UTILIZAMOS .use PARA CARGAR EN LA CONFIGURACIÓN INICIAL
                            // DE EXPRESS EL MÉTODO .json DE LA LIBRERÍA body-parser.
app.use(bodyParser.urlencoded({extended: true}));   // CONVIERTE A json LOS DATOS QUE VIENEN DE UN 
                                                    // FORMULARIO EN FORMATO form-data.
app.use(morgan(process.env.MORGAN_MODE));       // ESTO ES UN LOGGER. INDICA CUAL ES EL ENDPOINT QUE SE ESTÁ EJECUTANDO 
                                                // Y SU ESTADO.
const port  = process.env.PORT;

/**
 * INICIALIZACIÓN DE RUTAS.
 */
app.use("/api/peliculas",controladorPeliculas);
app.use("/api/usuarios",controladorUsuarios);

/**
 * CONFIGURAR LA CARPETA PÚBLICA.
 */
const publicPath = path.resolve(__dirname,'public');
app.use(express.static(publicPath));

app.get("/",function(req,res){
    res.sendFile(path.join(__dirname + "./index.html"));
});


/**
 * LA CONEXIÓN A LA BASE DE DATOS SE DEBE GARANTIZAR ANTES DE EJECUTAR EL API.
 */
basedatos.conectar()
    .then(function(){
        /**
         * CORRER EL SERVIDOR.
         * AQUÍ ES DONDE EL API ESTARÁ MONITOREANDO LAS PETICIONES.
         */
        app.listen(port, function(){
            console.log("API ejecutándose en el puerto " + port);
        });        
    })
    .catch(function(error){
        console.log("Se presentó un error al conectarse a la BASE DE DATOS");
        console.log(error);
    });