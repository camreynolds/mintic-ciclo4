import { useHistory } from 'react-router';
import '../estilos/header.css';

export default function Header(props){
    let history = useHistory();

    function handleClick(evento){
        const {name} = evento.target;
        if(name === "btnIniciar"){
            history.push("/login");
        }else{

        };
    };
    
    return (
        <>
            <header className="header">
                <button type="button" name="btnIniciar" onClick={handleClick}>Iniciar Sesión</button>
                <button type="button" name="btnCerrar" onClick={handleClick}>Cerrar Sesión</button>
            </header>
            {props.children}
        </>
    )
};