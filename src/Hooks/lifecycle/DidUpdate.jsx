/**
 * Uso de didMount en componente tipo clase y uso de didMount en componente tipo función
 */

import React, { Component, useEffect } from 'react'


export class DidUpdate extends Component {

    componentDidUpdate() {
        console.log('Comportamiento cuando el componente se actualice con nuevos props o estado')
    }

    render() {
        return (
            <div>
            <h1>DidUpdate</h1>
            </div>
        )
    }
}

export default DidUpdate


export const DidUpdateHook = () => {

    useEffect(() => {
        console.log('Comportamiento cuando el componente se actualice con nuevos props o estado')
    });

    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    );
}