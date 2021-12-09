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


            
