import { useState } from 'react';
import { Switch, Route, Redirect }    from 'react-router';
import ResultadosBusqueda   from '../paginas/ResultadosBusqueda';
import DetallePelicula      from '../paginas/DetallePelicula';
import Login                from '../paginas/Login';
import AdministrarPeliculas from '../paginas/AdministrarPeliculas';
import Header               from '../componentes/Header';

/**
 * COMPONENTES ENVOLVENTES -> WRAPPERS
 * 
 * <COMPONENTE SUPERIOR> -> props.children
 *  <COMPONENTE INFERIOR>
 *  <COMPONENTE INFERIOR>
 * </ COMPONENTE SUPERIOR>
 *  
 */

export default function Routes(){
    const auth = JSON.parse(localStorage.getItem('auth'));
    const [usuario,setUsuario] = useState(auth);

    return (
        <Switch>
            <Header>
                <Route exact path="/"               component={ResultadosBusqueda}/>
                <Route exact path="/detalle/:id"    component={DetallePelicula}/>
                <Route exact path="/login">
                    <Login autenticado={setUsuario}/>
                </Route>          
                <Route exact path="/administrar"> 
                    {usuario ? <AdministrarPeliculas/> : <Redirect to = "/login"/>}
                </Route>
            </Header>             
        </Switch>
    );
};