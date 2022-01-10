import Resultado from "../componentes/Resultado";
import '../estilos/resultados-busqueda.css'
import { useState, useEffect } from 'react';
import * as PeliculasService from '../servicios/PeliculasService';

export default function ResultadosBusqueda(){
    // AQUÍ VAN LOS ESTADOS.
    const [busqueda, setBusqueda]   = useState('');
    const [resultado, setResultado] = useState([]);

    useEffect( () => {
        if(busqueda.length >= 3){
            PeliculasService.servicioBusquedaTitulo(busqueda)
                .then(function(resultadosBusqueda){
                    setResultado(resultadosBusqueda.data);
                })
                .catch(function(error){
                    console.log(error);
                });   
        }
        else{
            setResultado([]);
        }
    },[busqueda]);

    function handleSubmit(evento){
        evento.preventDefault(); 
    };

    function handleChange(evento){
        let tituloPelicula = evento.target.value;
        setBusqueda(tituloPelicula);
    };

    return(
        <>
            <div className="dv-busqueda">
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Buscar Película</legend>
                        <input type="text" id="busqueda" name="busqueda" onChange={handleChange} placeholder="Buscar por título."/>
                    </fieldset>
                </form>
            </div>
            <div>
                <fieldset>
                    <legend>Listado Películas</legend>
                    <div>
                        <span>Mostrando los resultados para: {busqueda}</span>
                    </div>
                    <div className="dv-resultados">
                        {resultado && resultado.length > 0 && resultado.map(pelicula => (
                            <Resultado pelicula = {pelicula} />
                        ))}
                    </div>
                </fieldset>
            </div>
        </>
    );
};