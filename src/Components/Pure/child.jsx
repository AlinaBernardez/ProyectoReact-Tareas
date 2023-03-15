import React, { useRef } from 'react';

const Child = ({ name, send, update }) => {

    const messageRef = useRef('')
    const nameRef = useRef('')

    function pressButton() {
        const text = messageRef.current.value
        alert(`Message in Input: ${text}`)
    };

    function pressButtonParams(text) {
        alert(`Text: ${text}`)
    }

    function submitName(e) {
        e.preventDefault();
        update(nameRef.current.value);
    }

    return (
        <div style={{backgroundColor: 'burlywood', padding: '1.5rem'}}>
            <p onMouseOver={() => console.log('On Mouse Over')}>Hello {name}</p>
            <button onClick={() => console.log('click')}>Button 1</button>
            <button onClick={pressButton}>Button 2</button>
            <button onClick={() => pressButtonParams('Hello')}>Button 3</button>  {/*Cuando queremos utilizar una función con parámetros*/}
            <input
                placeholder='Send text to father'
                onFocus={() => console.log('Focused')}
                onChange={(e) => console.log('Input changed:', e.target.value)}
                onCopy={()=> console.log('Copied text')}
                ref={messageRef}
                />
            <button onClick={() => send(messageRef.current.value)}>Send message</button>
            <div style={{marginTop: '1rem'}}>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder='New name'/>
                    <button type='submit'>Update name</button>
                </form>
            </div>
        </div>
    );
}

export default Child;
