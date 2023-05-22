import { useState } from "react";

const Contador = () => {
//crear un state
const [numero, setNumero ] = useState(0)

// numero = numero +1 asi no se modifica el state
// setNumero(12);
    return (
        <section>
            <h2>Contador</h2>
            <h3>{numero}</h3>
            <button onClick={()=> setNumero(numero + 1) }>+1</button>
            {/* agregar un boton que decremente en 1 el valor del state */}
        </section>
    );
};

export default Contador;