function MiPrimerComponente(props){
    /**
     * props = {
     *  "nombre":   "...."
     *  "apellido": "...."
     * 
     * }
     */
    return(
        <>
            <h3>Mi MiPrimerComponente Funcional.</h3>
            <span>{props.nombre} {props.apellido}</span>
        </>
    );
};

export default MiPrimerComponente;