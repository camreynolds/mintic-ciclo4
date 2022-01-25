import { useState } from 'react';
import ListarPeliculas from '../componentes/ListarPeliculas';
import * as PeliculasService from '../servicios/PeliculasService';
import FormActor from '../componentes/FormActor';

export default function AdministrarPeliculas(){
    const [titulo,setTitulo] = useState('');
    const [ano,setAno] = useState('');
    const [tipo,setTipo] = useState('');
    const [rating,setRating] = useState('');
    const [clasificacion,setClasificacion] = useState('');
    const [poster,setPoster] = useState('');
    const [sinopsis,setSinopsis] = useState('');
    const [actores,setActores] = useState([]);

    function handleChange(evento){
        const {name,value} = evento.target;
        switch(name){
            case "titulo":
                setTitulo(value);
            break;

            case "ano":
                setAno(value);
            break;

            case "rating":
                setRating(value);
            break;

            case "clasificacion":
                setClasificacion(value);
            break;

            case "poster":
                setPoster(value);
            break;

            case "tipo":
                setTipo(value);
            break;

            case "sinopsis":
                setSinopsis(value);
            break;

        };
    };

    function handleClick(evento){
        evento.preventDefault();
        const datosPelicula = {
            "titulo":           titulo,
            "ano":              ano,
            "rating":           rating,
            "clasificacion":    clasificacion,
            "poster":           poster,
            "tipo":             tipo,
            "sinopsis":         sinopsis,
            "actores":          actores
        };
        
        PeliculasService.servicioCrearPelicula(datosPelicula)
            .then(function(resultadoCrear){
                if(resultadoCrear.datos.acknowledged){
                    alert(resultadoCrear.mensaje);
                    setTitulo('');
                    setAno('');
                    setRating('');
                    setClasificacion('');
                    setPoster('');
                    setTipo('');
                    setSinopsis('');
                    setActores([]);
                }
                else{
                    alert(resultadoCrear.mensaje);
                }
            })
    };
    
    function handleClickActores(evento){
        /**
         *  [] -> Adicionarles elementos.
         *      1. push
         *      2. concat
         *      3. New set
         *      4. Operador Spread (...)
         * 
         *  [1,2,3] -> 
         *  [].push(1,2,3) -> [ [1,2,3], 4]
         * 
         *  [...[1,2,3]] -> [1,2,3,4]
         */
        evento.preventDefault();
        const nuevosActores= [...actores, {nombre:"", apellido:""}];
        setActores(nuevosActores); 
    };

    function handleChangeActores(evento){
        const index = parseInt(evento.target.name.split("-").pop());
        const propiedad = evento.target.name.split("-").shift();
        const { value } = evento.target;
        setActores( actores => (
            actores.map( (actor,idx) => {
                if(idx === index){
                    return {...actor, [propiedad]:value};
                }
                else{
                    return actor;
                };
            })
        ));
    };

    return(
        <>
            <fieldset>
                <legend>Administrar películas.</legend>
                <form>
                    <div>
                        <label htmlFor='titulo'>Titulo:</label>
                        <input type="text" id="titulo" name="titulo" value={titulo} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor='ano'>Año:</label>
                        <input type="text" id="ano" name="ano" value={ano} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor='rating'>Rating:</label>
                        <input type="text" id="rating" name="rating" value={rating} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor='clasificacion'>Clasificacion:</label>
                        <input type="text" id="clasificacion" name="clasificacion" value={clasificacion} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor='poster'>Poster:</label>
                        <input type="text" id="poster" name="poster" value={poster} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor='tipo'>Tipo:</label>
                        <input type="text" id="tipo" name="tipo" value={tipo} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor='sinopsis'>Sinopsis:</label>
                        <textarea id="sinopsis" name="sinopsis" value={sinopsis} onChange={handleChange}></textarea>
                    </div>
                    <fieldset>
                        <legend>Actores</legend>
                        <div>
                            <button type="button" name="btnAdicionar" onClick={handleClickActores}>Adicionar Actor</button>
                        </div>
                        {actores && actores.map( (actor,index) => (
                            <FormActor
                                key         = {index}
                                id          = {index}
                                actor       = {actor}
                                onChange    ={handleChangeActores}
                            />
                        ))}
                    </fieldset>
                    <div>
                        <button type='button' onClick={handleClick}>Guardar</button>
                    </div>
                </form>
                <div>
                    <ListarPeliculas/>
                </div>
            </fieldset>
        </>
    );
};