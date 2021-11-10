// MongoDB - crUd - Update. 
// Operaciones de actualizacion.

// Operador $pull
db.peliculas.updateOne(
    // Objecto de busqueda.
    {
        "titulo": "Efecto Mariposa"
    },
    {
        "$pull":{ "generos":"Suspenso" }
    }
    // Datos de actualizacion. 
);
    
db.peliculas.updateOne(
    // Objecto de busqueda.
    {
        "titulo": "Efecto Mariposa"
    },
    {
        "$pull":{ "generos":{ 
            "$in": ["Suspenso","Fantasia"] 
            }
        }
    }
    // Datos de actualizacion. 
);