// SELECT * FROM peliculas WHERE ano = 2004;
db.peliculas.find(
    {
     "ano":2004
    }
);

// SELECT * FROM peliculas WHERE ano = 2004 AND rating = 7.7;
db.peliculas.find(
    {
     "ano":2004,
     "rating":7.7   
    }
);
    
    