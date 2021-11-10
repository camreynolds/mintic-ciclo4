// MongoDB - crUd - Update. 
// Operaciones de actualizacion.

// Operador $unset
db.peliculas.updateOne(
    // Objecto de busqueda.
    {
        "titulo": "Efecto Mariposa"
    },
    {
        "$unset":{
                "clasificacion": "",
                "nominaciones": ""
        }
    }
    // Datos de actualizacion. 
);
    
db.peliculas.updateMany(
    // Objecto de busqueda.
    {
        
    },
    {
        "$unset":{
                "clasificacion": "",
                "nominaciones": ""
        }
    }
    // Datos de actualizacion. 
);
    
