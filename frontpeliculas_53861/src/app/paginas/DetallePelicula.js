import { useParams } from "react-router-dom";

export default function DetallePelicula(){
    const { id } = useParams();
    return (
        <>
            <h1>Detalle Película {id}</h1>
        </>
    );
};