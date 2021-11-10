// MongoDB - crUd - Update. 
// Operaciones de actualizacion.

// Operador $delete
db.peliculas.deleteOne(
    // Objecto de busqueda.
    {
        "titulo": "Efecto Mariposa"
    }
);
    
db.peliculas.deleteMany(
    // Objecto de busqueda.
    {}
);