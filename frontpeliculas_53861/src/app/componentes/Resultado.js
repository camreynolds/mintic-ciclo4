import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import '../estilos/resultado.css'

export default function Resultado(props){

    function handleClick(evento){
        alert("Click en el contenedor película.")
        evento.stopPropagation();
    };
    
    function handleClickPoster(evento){
        alert("Click en el póster.")
        evento.stopPropagation();
    };


    return (
        <>
            <div className="dv-pelicula" onClick={handleClick}>
                <div className="dv-poster">
                    <img onClick={handleClickPoster} alt="poster" src={props.pelicula.poster}/>
                </div>
                <div>
                    <h3>{props.pelicula.titulo}</h3>
                </div>
                <div>
                    <p>{props.pelicula.sinopsis}</p>
                </div>
                <div>
                    <span>
                        <FontAwesomeIcon icon={faStarHalfAlt} />
                        {props.pelicula.rating}
                    </span>
                </div>
            </div>   
        </>
    );
};