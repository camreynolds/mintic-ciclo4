// Query Operators.
/*
*       - >     $gt
*       - >=    $gte
*       - <     $lt
*       - <=    $lte
*/

// Operador $in
db.peliculas.find(
    {
        "ano": { "$in" : [1984,1999] },
        "rating":7.7,
        "nominaciones.cantidad":20
    }
);
    
db.peliculas.find(
    {
        "ano": { "$in" : [1984,1999] },
        "generos": { "$in" : ["Accion","Terror"] }
    }
);

db.peliculas.find(
    {
        "ano": { "$in" : [1984,1999] },
        "generos": { "$in" : ["Accion","Terror"] },
        "rating": { "$gt":7, "$lt":8 }
    }
);    

// Operador $and

// Operador $or
db.peliculas.find(
    {
        "$or":[
            {"ano":2004},
            {"actores.nombre":"Keanu"},
            {"generos":"Infantil"},
        ]
    }
); 
    
db.peliculas.find(
    {
        "$or": [
            {"ano":{"$in":[2004,2001]}},
            {"actores.nombre":"Keanu"},
            {"generos":{"$size":4}}
        ]
    }
); 
    
    
    
    
    