// MongoDB - crUd - Update. 
// Operaciones de actualizacion.

// Operador $set
db.peliculas.updateOne(
    // Objecto de busqueda.
    {
        "titulo": "Efecto Mariposa"
    },
    {
        "$set":{
                "rating":8.0,
                "clasificacion": "R"
        }
    }
    // Datos de actualizacion. 
);

db.peliculas.updateOne(
    // Objecto de busqueda.
    {
        "titulo": "Matrix"
    },
    {
        "$set":{
                "clasificacion": "R"
        }
    }
    // Datos de actualizacion. 
);

db.peliculas.updateOne(
    // Objecto de busqueda.
    {
        "titulo": "Matrix"
    },
    {
        "$set":{
                "paises": ["USA"]
        }
    }
    // Datos de actualizacion. 
);

db.peliculas.updateOne(
    // Objecto de busqueda.
    {
        "_id": ObjectId("6184968e418aa62c206f74ed")
    },
    {
        "$set":{
                "nominaciones": {"cantidad":0, "ganadas":0},
                "clasificacion": "Sin clasificacion",
                "ano": 2004,
                "generos": ["Accion","Suspenso"]
        }
    }
    // Datos de actualizacion. 
);
    
db.peliculas.updateOne(
    // Objecto de busqueda.
    {
        "_id": ObjectId("6184968e418aa62c206f74ed")
    },
    {
        "$set":{
                "nominaciones.cantidad": 10,
               
        }
    }
    // Datos de actualizacion. 
);