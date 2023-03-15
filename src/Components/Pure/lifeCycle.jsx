/**
 * Componente tipo clase que tiene los métdos de ciclo de vida
 */

import React, { Component } from 'react';



class LifeCycle extends Component {
    
    constructor(props) {
        super(props)
        console.log('CONSTRUCTOR: se instancia el componente')
    }
    
    componentWillMount() {
        console.log('WILLMOUNT: antes del montaje del componente')
    }

    componentDidMount() {
        console.log('DIDMOUNT: Justo después de montar el componente, antes de renderizar')
    }

    shouldComponentUpdate(nextProps, nextState) {
        /**
         * Para controlar si el componente debe actualizarse
         * Devuelve true o false
         */
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('DIDUPDATE: justo después de actualizarse')
    }

    componentWillUnmount() {
        console.log('WILLUNMOUNT: justo antes de desaparecer')
    }
    
    render() {
        return (
            <div>
                
            </div>
        );
    }
}


LifeCycle.propTypes = {

};


export default LifeCycle;
