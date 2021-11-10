db.peliculas.find(
    {
        "resumen":{"$exists":1}
    }
); 
    
db.peliculas.find(
    {
        "resumen":{"$exists":0}
    }
); 