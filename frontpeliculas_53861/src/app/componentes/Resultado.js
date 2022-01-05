import '../estilos/resultado.css';

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
                    <img alt="poster" onClick={handleClickPoster} src="https://m.media-amazon.com/images/I/71jIC+zS02L._AC_SY879_.jpg"/>
                </div>
                <div>
                    <h3>TÍTULO</h3>
                </div>
                <div>
                    <p>SINOPSIS</p>
                </div>
                <div>
                    <span>
                        Rating
                        <i></i>
                    </span>
                </div>
            </div>
        </>
    );
};