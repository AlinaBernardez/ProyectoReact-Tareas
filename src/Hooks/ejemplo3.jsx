/* 
- useState
-useContext
*/


import React, { useState, useContext } from 'react';

/**
 * @returns Componente1:
 * Dispone de un contexto que va a tener el valor 
 * que recibe del padre.
 */

const miContexto = React.createContext(null);

const Componente1 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h1>
                El Token es: {state.token}
            </h1>
            <Componente2/>
        </div>
    );
}

const Componente2 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h2>
                La sesión es: {state.sesion}
            </h2>
        </div>
    );
}


export default function ComponenteContexto() {
    const estadoInicial = {
        token: '1234567',
        sesion: 1
    }

    const [sessionData, setData] = useState(estadoInicial);

    function actualizarSesion() {
        setData( {
            token: 'jwt1231434',
            sesion: sessionData.sesion + 1
        })
    }

    return (
        <miContexto.Provider value={sessionData}>
            {/* Todo lo que está aquí dentro puede leer los datos de sessionData */}
            {/* Y si se actualiza, los componentes también lo harán */}
            <h1>*** Ejemplo de useState y useContext ***</h1>
            <Componente1/>
            <button onClick={actualizarSesion}>Actualizar sesión</button>
        </miContexto.Provider>
    )
}




