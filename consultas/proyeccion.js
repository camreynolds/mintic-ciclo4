// Especificar los campos que deseo que se muestren.
// - La proyeccion se puede utilizar para colocar alias.

// SELECT titulo FROM peliculas;
db.peliculas.find(
    // Condiciones de busqueda.
    {
        
    },
    // Proyeccion. 
    {
        "titulo":1, "_id":0 // Se le coloca _id:0 para que no muestre el id.
    }
);
    
db.peliculas.find(
    // Condiciones de busqueda.
    {
        
    },
    // Proyeccion. 
    {
        "titulo":1, "_id":0, "generos":1, "nominaciones.ganadas":1, "actores.apellido":1
    }
);

// Agregando Alias.
    
// SELECT titulo AS nombrePelicula FROM peliculas.
db.peliculas.find(
    // Condiciones de busqueda.
    {},
    // Proyeccion. 
    {"nombrePelicula":"$titulo", "actor":"$actores.apellido"}
);    
    
