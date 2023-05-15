import "./App.css";
import Titulos from "./components/Titulos";

function App() {
  //aqui es donde podemos escribir logica

  return (
    // aqui puedo escribir un poquito de logica
    //<> es un Fragmento
    <>
      {/* aqui va el maquetado del componente */}
      {/* <Titulos aqui va los props></Titulos> */}
      <Titulos nuevoTitulo='Este titulo fue creado con props' estado={true} />
    </>
  );
}

export default App;
