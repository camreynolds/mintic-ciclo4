import ComponenteClase from "./ComponenteClase";
import MiPrimerComponente from "./MiPrimerComponente";
import MiPrimerComponenteArray from "./MiPrimerComponenteArray";

function App(){

  let nombre    = "Jimmy";
  let apellido  = "James";
  let personas  = [
    {"nombre":"Jimmy","apellido":"James"},
    {"nombre":"Kevin","apellido":"Jones"},
    {"nombre":"Robert","apellido":"McKey"},
  ];

  return(
    <>
      <MiPrimerComponente nombre={nombre} apellido={apellido}/>
      <br/><br/>
      <h1>Datos desde un Array.</h1>
      <MiPrimerComponenteArray personas={personas} />
    </>
  )
};

export default App;