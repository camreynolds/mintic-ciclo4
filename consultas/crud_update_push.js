// MongoDB - crUd - Update. 
// Operaciones de actualizacion.

// Operador $push
db.peliculas.updateOne(
    // Objecto de busqueda.
    {
        "titulo": "Encanto"
    },
    {
        "$push":{ "generos":"Aventura" }
    }
    // Datos de actualizacion. 
);
    
db.peliculas.updateMany(
    // Objecto de busqueda.
    {
        "titulo": "Encanto"
    },
    {
        "$push":{ 
           "generos": { 
               "$each": ["Fantasia","Ciencia ficcion","Musical"]
            }
        }
    }   
    // Datos de actualizacion. 
);