import React, { useState } from 'react';
import Child from '../Pure/child';

const Father = () => {

    const[name, setName] = useState('Al')

    function showMessage(text) {
        alert(`Message recieved: ${text}`)
    }

    function updateName(newName) {
        setName(newName)
    }

    return (
        <div style={{backgroundColor: 'bisque', padding: '3rem'}}>
            <Child name={name} send={showMessage} update={updateName}/>
        </div>
    );
}

export default Father;
