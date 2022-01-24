import ListarPeliculas from '../componentes/ListarPeliculas';

export default function AdministrarPeliculas(){
    return(
        <>
            <fieldset>
                <legend>Administrar películas.</legend>
                <div>
                    <ListarPeliculas/>
                </div>
            </fieldset>
        </>
    );
};