import '../estilos/resultado.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

export default function Resultado(props){    
    function handleClick(evento){
        alert("Click en contenedor película.");
    };

    function handleClickPoster(evento){
        evento.stopPropagation();
        alert("Click en el póster.")
    };
    return(
        <>
            <div className="dv-pelicula" onClick={handleClick}>
                <div className="dv-poster">
                    <img alt="poster" onClick={handleClickPoster} src={props.pelicula.poster}/>
                </div>
                <div>
                    <h3>{props.pelicula.titulo}</h3>
                </div>
                <div>
                    <p>{props.pelicula.sinopsis}</p>
                </div>
                <div>
                    <span>
                        <FontAwesomeIcon icon = {faStarHalfAlt} />
                        {props.pelicula.rating}
                    </span>
                </div>
            </div>
        </>
    );
};