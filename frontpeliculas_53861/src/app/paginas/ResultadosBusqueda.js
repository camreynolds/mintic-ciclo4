import {useState} from "react";
import Resultado from "../componentes/Resultado";
import '../estilos/resultados-busqueda.css'

export default function ResultadosBusqueda(){
    // Aquí van los estados.
    const [busqueda, setBusqueda] = useState('');

    /**
     *  CONTENEDOR DE EVENTOS.
     * 
     *  <button type="button" onclick="manejadorEvento()">
     *      -> JS   
     *          -> function manejadorEvento(evento){
     * 
     *              }
     */ 

    /**
     *  RECOMENDACIÓN PARA NOMBRAR LOS MANEJADORES DE EVENTOS.
     * 
     *  handlerSubmitFormularioUno
     */
    
    function handleSubmit(evento){
        evento.preventDefault();
    };
    
    function handleChange(evento){
        let tituloPelicula = evento.target.value;
        setBusqueda(tituloPelicula);
    };

    return (
        <>
            <div className="dv-busqueda">
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Buscar Película</legend>
                        <input type="text" id="busqueda" name="busqueda" onChange={handleChange} placeholder="Buscar por título"/>
                    </fieldset>
                </form>
            </div>
            <div>
                <fileset>
                    <legend>Listado Películas</legend>
                    <div><span>Mostrando resultados para: {busqueda}</span></div>
                    <div className="dv-resultados">
                        <Resultado/>
                        <Resultado/>
                        <Resultado/>
                        <Resultado/>
                        <Resultado/>
                        <Resultado/>
                    </div>
                </fileset>
            </div>    
        </>
    );
};