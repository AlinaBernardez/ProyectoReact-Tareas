/* 
- useState
- useRef
- useEffect
*/ 

import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {

    // Creamos dos contadores diferentes:
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    // Creamos una referencia con useRef para asociar una variable con un elemento del DOM
    const miRef = useRef();


    function incrementar1() {
        setContador1(contador1 + 1);
    }
    function incrementar2() {
        setContador2(contador2 + 1);
    }

/**
 * Trabajando con useEffect:
 * ? Caso 1: Ejecutar SIEMPRE un snippet de código
 */
// useEffect(() => {
//     console.log('cambio en el estado del componente');
//     console.log(miRef);
// })

/**
 * Trabajando con useEffect:
 * ? Caso 2: Ejecutar SOLO cuando cambie contador1 o contador2 (habiendo más elementos)
 */
useEffect(() => {
    console.log('cambio en el estado del contador 1');
    console.log(miRef);
}, [contador1, contador2]);


    return (
        <div>
            <h1>*** Ejemplo de useSate,  useRef y useEffect ***</h1>
            <h2>CONTADOR 1: {contador1}</h2>
            <h2>CONTADOR 2: {contador2}</h2>
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>
            <button onClick={incrementar1}>Incrementar 1</button>
            <button onClick={incrementar2}>Incrementar 2</button>
        </div>
    );
}

export default Ejemplo2;
