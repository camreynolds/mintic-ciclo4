# mintic-ciclo4
## Desarrollo de Aplicaciones WEB

- Clase - 53861 - Sessión 7 - APIRestful - CRUD Parte 1-20211111 0107-1

Explicación 1:

    HTTP
    
    -> PETICIÓN -> SOLICITAR/ENVIAR INFORMACIÓN DE UN RECURSO.
        -> GET      -> SOLICITA/CONSULTA/OBTIENE UN RECURSO.
            -> SOLO ENVÍA INFORMACIÓN POR QUERY o PARAMS.

        -> POST     -> ENVIA INFORMACIÓN PARA CREAR UN NUEVO RECURSO.
            -> BODY/QUERY/PARAMS

        -> PUT      -> ACTUALIZA LA INFORMACIÓN DE UN RECURSO.
            -> BODY/QUERY/PARAMS

        -> DELETE   -> ELIMINA UN RECURSO.
            -> QUERY/PARAMS
    
    -> RESPUESTA -> CONTIENE LA INFORMACIÓN O EL ESTADO DE LA PETICIÓN
        -> 100 - 199 -> INFORMATIVOS.
        -> 200 - 299 -> INFORMAN SI SE EJECUTÓ CORRECTAMENTE LA PETICIÓN.
        -> 300 - 399 -> REDIRECCIONAN PETICIONES.
        -> 400 - 499 -> ERRORES DEL CLIENTE. (ASOCIADOS A LA PROGRAMACIÓN).
        -> 500 - 599 -> ERRORES DEL SERVIDOR.

    ** CABECERAS (HEADER) -> SON COMUNES TANTO PARA LA PETICIÓN COMO PARA LA RESPUESTA.
        -> INFORMACIÓN ADICIONAL QUE DESCRIBE A LA PETICIÓN O A LA RESPUESTA

    ** CUERPO (BODY) -> SON COMUNES TANTO PARA LA PETICIÓN COMO PARA LA RESPUESTA.
        -> INFORMACIÓN/MENSAJE QUE SE ENVÍA AL SERVIDOR/CLIENTE.

    URL -> UNIFORM RESOURCE LOCATION.
        -> PROTOCOLO        -> HTTP://
        -> HOST/SERVIDOR    -> LOCALHOST o GOOGLE o AMAZON.
        -> PUERTO           -> :(NÚMERO)
        -> PATH RESOURCE    -> /XXX/YY/Z
        -> QUERY STRING     -> ?variable=valor&variable=valor
            -> SON DATOS QUE SE ENVIAN PARA COMPLEMENTAR LA PETICIÓN.

Explicación 2:

    - El queryString no se define en la ruta al momento de crear el endpoint.
    - El queryString son datos opcionales y/o adicionales que se le agregan a la petición.  
      No son obligatorios, son opcionales, y por lo tanto se definen en la petición, no en la ruta.
    - Peticiones de tipo GET, y DELETE por lo general envian la información por el Query.
    - Peticiones de tipo POST, PUT por lo general envian informaicón por el Body.
    - A vece el PUT mezcla ambos, tanto Query, como Body.  

Explicación 3:

    - ESTRUCTURA DE CARPETAS PARA PROYECTO DE API's. (ESTRUCTURA UNIFORME Y POR CAPAS).
        -> POR CADA MÓDULO/FUNCIONALIDAD.
            -> CONTROLADOR  -> ES EL ENCARGADO DE RECIBIR TODAS LAS RUTAS.
            -> SERVICIOS    -> ES DONDE SE VAN A PROCESAR LAS PETICIONES, Y TRANSFORMAR LOS DATOS.
            -> MODELO       -> ENVIA LOS DATOS A LA BASE DE DATOS o EXTRAE LOS DATOS DE LA BASE DE DATOS.

Explicación 4:

    - CONFIGURACIÓN DE MODELO DE CAPAS.
        -> CONTROLADOR
            -> IMPORTAR EXPRESS PARA PODER CREAR LAS RUTAS.
            -> INSTANCIAR UNA VARIABLE ASIGNANDOLE express.Router();
                -> express.Router() DEFINE/ESTRUCTURA RUTAS QUE LUEGO SE EXPORTAN A LA 
                   APLICACIÓN PRINCIPAL PARA QUE LAS MONITOREÉ.  
            -> DEFINIR LOS ENDPOINTS.
            -> EXPORTAR EL MÓDULO.
            -> IMPORTAR LAS RUTAS A LA APLICACIÓN PRINCIPAL.

Explicación 5:
            
    - NODE  -> CREA UN OBJETO LLAMADO process.
        -> process.env.PORT

Explicación 6: clase 13/11/2021
    
    - PELICULAS
        -> CONTROLADOR -> controller.js -> ENTRADA/SALIDA AL SISTEMA.
            -> RECIBE DATOS DE ENTRADA -> REQUEST.
            -> ENVÍA AL SERVICIO LAS ENTRADAS.
            -> RECIBE DEL SERVICIO DATOS TRANSFORMADOS.
            -> ENVÍA RESPUESTA AL CLIENTE.
    
        -> SERVICIO -> service.js -> MANIPULACIÓN DE DATOS -> LÓGICA DEL NEGOCIO.
            -> RECIBE UNA ACIIÓN DESDE EL CONTROLADOR.
                -> EJECUTA LA ACCIÓN.
                    -> CONSULTA DATOS AL MODELO.
                    -> REALIZA OPERACIONES MATEMÁTICAS, LÓGICAS CON LOS DATOS.
            -> ENVÍA LOS RESULTADOS DE LA ACCIÓN AL CONTROLADOR.

        -> MODELO -> GESTIONA LA BASE DE DATOS.
            -> REALIZA CONSULTA DE LOS DATOS A PETICIÓN DE LOS SERVICIOS.
                -> LECTURA -> SELECCIONA.
                -> ESCRIBE.
                -> ACTUALIZA.
                -> ELIMINA.

Explicación 7: clase 18/11/2021

    - nuevoUsuario = {
        "nombre": "xxxx",
        "usuario": "yyyy",
        "clave": "zzzz", -> ENCRIPTAR
        "roles": ["A","B"]
    }
        
    - BCRYPT
        -> SALT_ROUNDS -> # DE VECES DE LA ENCRIPCIÓN.
        -> SALT
        -> CLAVE -> ENCRIPCIÓN
    -> HASH

Explicación 8: clase 19/11/2021

    -> IMPLEMENTACIÓN DE LIBRERÍA DE SEGURIDAD.
        -> CORS
        -> HELMET
        -> NODE-RATE-LIMITER
        -> CSURF
        -> UTILIZAR CERTIFICADOS TLS
        -> UTILIZAR CERTIFICADOS SSL
        -> SAFE-REGEX

    -> RENDIMIENTO DE API EXPRESS
        -> COMPRESSION
        -> REGISTRO DE ACTIVIDAD / ERROR HANDLING
            -> WINSTON-EXPRESS-MIDDLEWARE -> OPCION 1
            -> BUNYAN-MIDDLEWARE -> OPCION 2

    -> AUTENTICACIÓN Y VALIDACIÓN
        -> INICIO DE SESIÓN
        -> OAUTH2
        -> SERVICIO DE AUTENTICACION (AUTH0)
        -> SMS
        -> API KEYS
    -> AUTORIZACIÓN
        -> CABECERAS HTTP
        -> JWT
        -> OAUTH2
        -> SERVICIOS DE AUTORIZACIÓN
        -> AUTORIZACIÓN BASADAS EN ROLES

Explicación 9: clase 23/11/2021

    -> COMPONENTES DE CLASE (COMPONENTES PUROS)
        -> REPRESENTAN UNA CLASE DE JS.
        -> DEBEN HEREDAR DE React.Component
        -> DEBEN TENER UN MÉTODO LLAMADO render().
        -> GESTIONAN INDEPENDIENTEMENTE EL CICLO DE VIDA DEL COMPONENTE.

Explicación 10: clase 24/11/2021

    -> SE CREA ESTRUCTURA DE CARPETAS PARA PROYECTO DE REACI.

Explicación 11: clase 26/11/2021

    -> EXPLICACIÓN DE useEffect().
    -> EXPLICACIÓN DE ROUTERS.
        -> INSTALACIÓN DE LIBRERÍA react-router-dom@5.2.0

Explicación 12: clase 30/11/2021

    -> EXPLICACIÓN DE API Fetch().
