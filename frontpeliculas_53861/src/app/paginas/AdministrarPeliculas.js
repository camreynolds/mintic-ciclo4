import { useState,useEffect } from 'react';
import ListarPeliculas from '../componentes/ListarPeliculas';
import * as PeliculasService from '../servicios/PeliculasService';
import FormActor from '../componentes/FormActor';
import FomrGeneral from '../componentes/FormGeneral';

export default function AdministrarPeliculas(){
    const [titulo,setTitulo] = useState('');
    const [ano,setAno] = useState('');
    const [tipo,setTipo] = useState('');
    const [rating,setRating] = useState('');
    const [clasificacion,setClasificacion] = useState('');
    const [poster,setPoster] = useState('');
    const [sinopsis,setSinopsis] = useState('');
    const [actores,setActores] = useState([]);
    const [generos,setGeneros] = useState([]);
    const [idiomas,setIdiomas] = useState([]);
    const [paises,setPaises] = useState([]);
    const [directores,setDirectores] = useState([]);
    const [nominaciones,setNominaciones] = useState({cantidad:0,ganadas:0});
    const [id,setId] = useState('')

    useEffect( () => {
        if(id){
            PeliculasService.servicioBusquedaId(id)
            .then( function(resultadoBusqueda){
                const pelicula = resultadoBusqueda.data;
                    setId(pelicula.id);
                    setTitulo(pelicula.titulo);
                    setAno(pelicula.ano);
                    setTipo(pelicula.tipo);
                    setRating(pelicula.rating);
                    setClasificacion(pelicula.clasificacion);
                    setPoster(pelicula.poster);
                    setSinopsis(pelicula.sinopsis);
                    setActores(pelicula.actores);
                    setGeneros(pelicula.generos);
                    setIdiomas(pelicula.idiomas);
                    setPaises(pelicula.paises);
                    setDirectores(pelicula.directores);
                    setNominaciones(pelicula.nominaciones);
                });
        }
    },[id]);

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
            "actores":          actores,
            "generos":          generos,
            "idiomas":          idiomas,
            "paises":           paises,
            "directores":       directores,
            "nominaciones":     nominaciones,
        };
        
        if(id){
            PeliculasService.servicioActualizarPelicula(id,datosPelicula)
                .then(function(resultadoActualizar){
                    if(resultadoActualizar.datos.acknowledged){
                        alert(resultadoActualizar.mensaje);
                    }else{
                        alert(resultadoActualizar.mensaje);
                        setTitulo('');
                        setAno('');
                        setRating('');
                        setClasificacion('');
                        setPoster('');
                        setTipo('');
                        setSinopsis('');
                        setActores([]);
                        setDirectores([]);
                        setNominaciones({cantidad:0,ganadas:0});
                        setId('');
                    }
                })
                .catch(function(error){
                    console.log(error);
                });
        }else{
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
                        setDirectores([]);
                        setNominaciones({cantidad:0,ganadas:0})
                    }
                    else{
                        alert(resultadoCrear.mensaje);
                    }
                })
        };

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
        const {name,value} = evento.target;
        if(name==="btnAdicionar"){
            const nuevosActores= [...actores, {nombre:"", apellido:""}];
            setActores(nuevosActores); 
        }
        else{
            setActores( actores => (
                actores.filter( (actor,idx) => idx !== parseInt(value) )
            ));
        }
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

    function handleChangeNominaciones(evento){
        const {name,value} = evento.target;
        setNominaciones( nominaciones => (
            {...nominaciones, [name] : value}   //Se encierra [name] entre corchetes para decir que tome 
                                                //el valor de name,y lo reemplaze con el valor de value.
            /**
             * EXPLICACIÖN  OPERADOR SPREAD.
             * 
             * name = "cantiadad",
             * value = 10,
             * [...nominaciones] -> crea un objeto clave,valor.
             * nominaciones = {
             *  cantidad: 0,
             *  ganadas: 0
             * }
             * {...nominaciones, [name]:value}
             * {
             *  cantidad = 10, -> al encontrar el mismo key(valor de name) sobreescribe el valor(value)
             *  ganadas = 0
             * }
             */


        ))
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
                                onClick     ={handleClickActores}
                            />
                        ))}
                    </fieldset>
                    <FomrGeneral
                        titulo="Géneros"
                        id="generos"
                        datos={generos}
                        actualizar={setGeneros}
                    />
                    <FomrGeneral
                        titulo="Idiomas"
                        id="idiomas"
                        datos={idiomas}
                        actualizar={setIdiomas}
                    />
                    <FomrGeneral
                        titulo="Países"
                        id="paises"
                        datos={paises}
                        actualizar={setPaises}
                    />
                    <FomrGeneral
                        titulo="Directores"
                        id="directores"
                        datos={directores}
                        actualizar={setDirectores}
                    />
                    <fieldset>
                        <legend>Nominaciones</legend>
                        <div>
                            <label htmlFor='cantidad'>Cantidad:</label>
                            <input type='text' id='cantidad' name='cantidad' value={nominaciones.cantidad} onChange={handleChangeNominaciones}/>
                        </div>
                        <div>
                            <label htmlFor='ganadas'>Ganadas:</label>
                            <input type='text' id='ganadas' name='ganadas' value={nominaciones.ganadas} onChange={handleChangeNominaciones}/>
                        </div>
                    </fieldset>
                    <div>
                        <button type='button' onClick={handleClick}>Guardar</button>
                    </div>
                </form>
                <div>
                    <ListarPeliculas
                        setId={setId}
                    />
                </div>
            </fieldset>
        </>
    );
};