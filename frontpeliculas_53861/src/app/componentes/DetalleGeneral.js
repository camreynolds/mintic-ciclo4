export default function DetalleGeneral(props){
    // console.log(props.datos);
    return(
        <>
            <fieldset>
                <legend>{props.titulo}</legend>
                <ul>
                    {props.datos && props.datos.map( (dato,idx) => (
                        <li key={idx}>{dato}</li>
                    ))}
                </ul>
            </fieldset>
        </>
    );
};