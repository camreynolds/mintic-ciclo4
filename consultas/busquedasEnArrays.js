db.peliculas.find(
    {
            "generos":["Accion","Drama"]
    }
);
    
db.peliculas.find(
    {
            "generos":"Accion"
    }
);
    
db.peliculas.find(
    {
            "generos.1":"Drama"
    }
);