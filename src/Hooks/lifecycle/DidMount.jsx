/**
 * Ejemplo del método en componente tipo clase y en componente tipo función
 */

import React, { Component, useEffect } from 'react'


export class DidMount extends Component {

    componentDidMount() {
        console.log('Comportamiento antes de que el componente sea añadido al DOM (renderice')
    }

    render() {
        return (
            <div>
            <h1>DidMount</h1>
            </div>
        )
    }
}

export default DidMount


export const DidMountHook = () => {

    useEffect(() => {
        console.log('Comportamiento antes de que el componente sea añadido al DOM (renderice')
    }, [])

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}
