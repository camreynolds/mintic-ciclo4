export default function DetalleActores(props){
    console.log(props.datos);
    return(
        <>
            <fieldset>
                <legend>{props.titulo}</legend>
                <ul>
                    {props.datos && props.datos.map( (actor,idx) => (
                        <li key={idx}>{actor.nombre} {actor.apellido}</li>
                    ))}
                </ul>
            </fieldset>
        </>
    );
};