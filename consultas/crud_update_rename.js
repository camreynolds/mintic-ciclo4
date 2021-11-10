// MongoDB - crUd - Update. 
// Operaciones de actualizacion.

// Operador $remane
db.peliculas.updateMany(
    // Objecto de busqueda.
    {
        "resumen": { "$exists":true }
    },
    {
        "$rename":{ "resumen":"sinopsis" }
    }
    // Datos de actualizacion. 
);