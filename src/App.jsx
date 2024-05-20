import "./App.css";
import { CambioColor } from "./components/CambioColor";
import { ColorBoton } from "./components/ColorBoton";
import { Contador } from "./components/Contador";
import { Entrada } from "./components/Entrada";
import { EntradaBoton } from "./components/EntradaBoton";
import { MyProps } from "./components/MyProps";

function App() {

  return (
    <div className="AppContainer">
      <ColorBoton />
      <CambioColor />
      <MyProps Nombre='My Formulario'/>
      <Contador />
      <Entrada />
      <EntradaBoton />
    </div>
  );
}

export default App;
