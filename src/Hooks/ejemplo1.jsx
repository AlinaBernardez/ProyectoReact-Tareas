/* Ejemplo Hook useState 

- crear componente de tipo funcion.
- acceder a su estado a través de un hook y modificarlo.

*/

import React, { useState } from 'react';

const Ejemplo1 = () => {

    const valorInicial = 0;
    const personaInicial = {
        nombre: 'Alina',
        email: 'fghdñfk@gmail.com',
    }
    /*
    queremos que VALORINICIAL y PERSONAINICIAL pasen a formar parte del componente
    para gestionar su cambio y que éste se vea reflejado en nuestro HTML.

    const [nombreVariable, funcionCambio] = useSate(valorInicial).
    */

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    function incrementarContador() {
        setContador(contador + 1);
    }

    function actualizaPersona() {
        setPersona(
            {
                nombre: 'Héctor',
                email: 'jfdjsk@gmail.com',
            }
        );
    }

    return (
        <div>
            <h1>*** Ejemplo de useSate ***</h1>
            <h2>CONTADOR: { contador }</h2>
            <h2>DATOS DE LA PERSONA:</h2>
            <h3>NOMBRE: { persona.nombre }</h3>
            <h3>EMAIL: { persona.email }</h3>
            <div>
                <button onClick={incrementarContador}>Incrementar contador</button>
                <button onClick={actualizaPersona}>Actualiza persona</button>
            </div>
        </div>
    );
}

export default Ejemplo1;
