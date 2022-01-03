import MiPrimerComponente from "./MiPrimerComponente";
import MiPrimerComponenteArray from "./MiPrimerComponenteArray";

function App() {
  let nombre = "Jason";
  let apellido = "Drake";
  let personas = [
    {"nombre":"Joan","apellido":"Smith"},
    {"nombre":"Kurt","apellido":"Cobain"},
    {"nombre":"Chris","apellido":"Churchill"}
  ];

  return (
    <>
      <h1>Mis Primeros Paso en React.</h1>
      <MiPrimerComponente nombre={nombre} apellido={apellido}/>
      <MiPrimerComponente nombre="Drako" apellido="Malfoy"/>
      <MiPrimerComponente nombre="Harry" apellido="Potter"/>
      <MiPrimerComponente nombre="Lucas" apellido="Smith"/>
      <br></br>
      <h1>Datos desde un Array</h1>
      <MiPrimerComponenteArray personas={personas}/>
    </>
  );
}

export default App;
