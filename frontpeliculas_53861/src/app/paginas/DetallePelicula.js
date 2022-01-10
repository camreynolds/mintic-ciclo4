import { useParams } from "react-router";
import DetalleActores from '../componentes/DetalleActores';
import DetalleNominaciones from '../componentes/DetalleNominaciones';
import DetalleGeneral from '../componentes/DetalleGeneral';
import '../estilos/detalle-pelicula.css';
import { useState,useEffect } from "react";
import * as PeliculasService from '../servicios/PeliculasService';

export default function DetallePelicula(){
    const { id } = useParams();
    const [pelicula,setPelicula] = useState({});

    useEffect( () =>  {
        PeliculasService.servicioBusquedaId(id)
            .then(function(resultadosBusqueda){
                setPelicula(resultadosBusqueda.data);
            })
    },[id]);


    /**
     * 1.- DATOS EXTERNOS...
     *      -> ID PELÍCULA -> PARÁMETROS.
     * 2.- ESTADOS / PROPIEDADES.
     *      ESTADOS.
     *          -> PELICULA.
     * 3.- EFECTOS.
     *      -> useEffect() -> MONTAJE.
     *      -> CARGAR LA PELÍCULA.
     * 4.- COMPONENTES.
     *      -> DETALLE ACTORES -> ARRAY DE OBJECTOS. TÍTULO.
     *      -> DETALLE NOMINACIONES -> OBJECTO.
     *      -> DETALLE GENERAL -> ARRAY.
     */

    return (
        <>  
            <div className="dv-detalle_detalle">
                 <fieldset>
                     <legend>Detalle Película</legend>
                     <h1>{pelicula.titulo}</h1>
                     <div className="dv-main_detalle">
                         <div className="dv-poster_detalle">
                             <img alt="Póster" src={pelicula.poster}></img>
                         </div>
                        <div>
                            <fieldset>
                                <legend>Año</legend>
                                <span>{pelicula.ano}</span>
                            </fieldset>
                            <fieldset>
                                <legend>Rating</legend>
                                <span>{pelicula.rating}</span>
                            </fieldset>
                            <fieldset>
                                <legend>Clasificación</legend>
                                <span>{pelicula.clasificacion}</span>
                            </fieldset>
                        </div>
                        <div>
                            <p>{pelicula.sinopsis}</p>
                        </div>
                     </div>
                     <fieldset>
                         <legend>Detalle</legend>
                         <DetalleActores titulo="Actores" datos={pelicula.actores}/>
                         <div className="dv-datos_detalle">
                             <DetalleGeneral titulo="Géneros" datos={pelicula.generos}/>
                             <DetalleGeneral titulo="Idiomas" datos={pelicula.idiomas}/>
                             <DetalleGeneral titulo="Paises" datos={pelicula.paises}/>
                             <DetalleNominaciones titulo="Nominaciones" datos={pelicula.nominaciones}/>
                         </div>
                         <DetalleGeneral titulo="Directores" datos={pelicula.directores}/>
                     </fieldset>
                 </fieldset>
            </div>

        </>
    );
};