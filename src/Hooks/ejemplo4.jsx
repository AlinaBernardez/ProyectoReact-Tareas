/**
 * Uso de props.children
 */

import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>*** Ejemplo de props.children ***</h1>
            <h2>
                Nombre: { props.nombre }
            </h2>
            {/* props.children pintará por defecto lo que se encuentre entre las llaves de
            este componente, desde el compo. de orden superior */}
            { props.children }
        </div>
    );
}

export default Ejemplo4;
