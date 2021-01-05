import React, {Fragment, useState} from 'react';
import Header from './componentes/Header';
import Formulario from "./componentes/Formulario";
import Mensaje from "./componentes/Mensaje";
import Resultado from "./componentes/Resultado";

function App() {

  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState("Ningún plazo elegido");
  const [total, guardarTotal] = useState(0);


  let componente;
  if( cantidad <= 0 || isNaN(cantidad) || plazo === "Ningún plazo elegido" || isNaN(plazo) ) {
    // console.log("Hola desde true de App");
    componente = <Mensaje/>
  } else {
    // console.log("Hola desde false de App");
    componente = <Resultado
                  total={total}
                />
  }






  return (
    <Fragment>      {/* Fragment sirve para no tener que añadir un div u otro elemento ya que no podemos retornar sólo el componente, sino el componente envuelto en un elemento html. Para evitar ese elemento HTML, se usa el Fragment el cual no agregará nada al HTML y aún así nos dejará retornar el componente Header. */}
        <Header 
            titulo="Cotizador de Préstamos"
        />
        <div className="container">
            <Formulario 
                cantidad={cantidad}
                guardarCantidad={guardarCantidad}
                plazo={plazo}
                guardarPlazo={guardarPlazo}
                guardarTotal={guardarTotal}
            />
            
            <div className="mensajes">
                {componente}
            </div>
        </div>
    </Fragment>
  );
}

export default App;
