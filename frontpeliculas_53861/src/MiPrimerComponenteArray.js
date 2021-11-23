function MiPrimerComponenteArray(props){
    /**
     * props = {
     *  personas = [{},{},{}]
     * 
     * }
     * 
     * map -> Iterar y devolver ese elemento modificado.
     */
    return(
        <>
            {props.personas.map( persona => (
                <>
                    <h3>Mi MiPrimerComponente Funcional.</h3>
                    <span>{persona.nombre} {persona.apellido}</span>
                </>      
            ))}
        </>
    );
};

export default MiPrimerComponenteArray;