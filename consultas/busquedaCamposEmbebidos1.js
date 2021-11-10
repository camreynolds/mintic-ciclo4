db.peliculas.find({
    "nominaciones":{"cantidad":9,"ganadas":3}
});

db.peliculas.find({
    "nominaciones.cantidad":20
});

db.peliculas.find({
    "nominaciones.cantidad":20,
    "ano":1984
});