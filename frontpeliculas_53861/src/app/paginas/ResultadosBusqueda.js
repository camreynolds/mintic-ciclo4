import Resultado from "../componentes/Resultado";
import '../estilos/resultados-busqueda.css'

export default function ResultadosBusqueda(){
    return(
        <>
            <div className="dv-busqueda">
                <form>
                    <fieldset>
                        <legend>Buscar Película</legend>
                        <input type="text" id="busqueda" name="busqueda" placeholder="Buscar por título."/>
                    </fieldset>
                </form>
            </div>
            <div>
                <fieldset>
                    <legend>Listado Películas</legend>
                    <div className="dv-resultados">
                        <Resultado/>
                        <Resultado/>
                        <Resultado/>
                    </div>
                </fieldset>
            </div>
        </>
    );
};