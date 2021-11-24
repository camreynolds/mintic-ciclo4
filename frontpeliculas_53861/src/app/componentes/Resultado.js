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
                    <img onClick={handleClickPoster} alt="poster" src="https://dam.smashmexico.com.mx/wp-content/uploads/2019/12/Poster4.jpg"/>
                </div>
                <div>
                    <h3>TÍTULO</h3>
                </div>
                <div>
                    <p>SINOPSIS</p>
                </div>
                <div>
                    Rating
                    <i></i>
                </div>
            </div>   
        </>
    );
};