// Busqueda en Array de Objectos.

db.peliculas.find(
    {
            "actores":{"nombre":"Amy","apellido":"Smart"}
    }
);
    
// Especificar Subcampo.
db.peliculas.find(
    {
            "actores.nombre":"Lawrence"
    }
); 
    
// Especificar Posicion Subcampo.
db.peliculas.find(
    {
            "actores.1.apellido":"Fanning"
    }
); 