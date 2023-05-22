import "./App.css";
import Titulos from "./components/Titulos";
import Contador from "./components/Contador";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  //aqui es donde podemos escribir logica

  return (
    // aqui puedo escribir un poquito de logica
    //<> es un Fragmento
    <>
      {/* aqui va el maquetado del componente */}
      {/* <Titulos aqui va los props></Titulos> */}
      <Titulos nuevoTitulo='Este titulo fue creado con props' estado={true} />
      <Contador></Contador>
    </>
  );
}

export default App;
