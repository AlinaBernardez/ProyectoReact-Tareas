
import React, { useState } from 'react';

let red = 0;
let green = 0;
let blue = 0;

const firstStyle = {
    width: '255px',
    height: '255px',
    margin: '50px',
    backgroundColor: 'black',
    borderRadius: '10px'
}
const randomStyle = {
    width: '255px',
    height: '255px',
    margin: '50px',
    backgroundColor: generateColor(),
    borderRadius: '10px'
}

function generateColor() {
    red = Math.round(Math.random() * 255);
    green = Math.round(Math.random() * 255);
    blue = Math.round(Math.random() * 255);
    return `rgb(${red},${green},${blue})`;
}

const Rectangulo = ({mouseAction, propStyle}) => {
    return(
        <button style={ propStyle } onDoubleClick={ mouseAction }></button>
    )
}

const ComponenteRectangulo = () => {

    const [styleNow, setStyle] = useState(firstStyle);

    function mouseAction(e) {
        e.preventDefault();
        setStyle(randomStyle);
        return;
    }

    let rect; 
    rect = <Rectangulo propStyle={ styleNow } mouseAction={ mouseAction }/> 

    return (
        <div>
            { rect }
        </div>
    );
}

export default ComponenteRectangulo;
