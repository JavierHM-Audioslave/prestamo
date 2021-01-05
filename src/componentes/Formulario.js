import React, {Fragment, useState} from "react"
import Error from "./Error"
import {calcularTotal} from "../helpers"


const Formulario = ({cantidad, guardarCantidad, plazo, guardarPlazo, guardarTotal}) => {


    // const [error, guardarError] = useState(false);  {/* Creo el state acá y no en "App.js" porque este estado no se va a compartir con otros componentes, sólo se va a usar en éste */}
    const [componenteError, guardarComponenteError] = useState(null);
    // let componenteError = null;


    const calcularPrestamo = e => {     {/* Esta función va a cotizar el préstamo sólo luego de haber validado si los datos ingresados por el usuario son suficientes y correctos */}

        e.preventDefault();

        if( cantidad <= 0 || isNaN(cantidad) || plazo === "Ningún plazo elegido" || isNaN(plazo) ) {
            // componenteError = <Error/>;
            guardarComponenteError(<Error/>);
        } else {
            // componenteError = null;
            guardarComponenteError(null);
            guardarTotal(calcularTotal(cantidad, plazo));
        }

       
    }




    return ( 

        <Fragment>
            <form onSubmit={calcularPrestamo}>
                Cantidad actualizada por valor de préstamo: {cantidad}
                <div className="row">
                    <div>
                        <label>Cantidad Prestamo</label>
                        <input 
                            className="u-full-width" 
                            type="number" 
                            placeholder="Ejemplo: 3000"
                            onChange = { e => guardarCantidad(parseInt(e.target.value)) } 
                        />
                    </div>
                    <div>
                        <label>Plazo para Pagar</label>
                        <select className="u-full-width" onChange = { e => guardarPlazo(parseInt(e.target.value)) }>
                            <option value="">Seleccionar</option>
                            <option value="3">3 meses</option>
                            <option value="6">6 meses</option>
                            <option value="12">12 meses</option>
                            <option value="24">24 meses</option>
                        </select>
                        Plazo elegido: {plazo}
                    </div>
                    <div>
                        <input 
                            type="submit" 
                            value="Calcular" 
                            className="button-primary u-full-width" 
                        />
                    </div>
                </div>
            </form>

            {componenteError}
            
            {/* { (error) ? <p className="error">Todos los campos son obligatorios</p> : null } Agrego este elemento si y sólo si la validación hecha en la función "calcularPrestamo" dió false */}
        </Fragment>
     );
}
 
export default Formulario;