
import React, { useState } from 'react';

let red = 0;
let green = 0;
let blue = 0;
let color = `rgb(${red},${green},${blue})`

function generateColor() {
    red = Math.round(Math.random() * 256);
    green = Math.round(Math.random() * 256);
    blue = Math.round(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
}


const Rectangulo = ({mouseAction, propStyle}) => {
    return(
        <button style={ propStyle } onDoubleClick={ mouseAction }></button>
    )
}

const ComponenteRectangulo = () => {

    const firstStyle = {
        width: '255px',
        height: '255px',
        margin: '50px',
        backgroundColor: 'black',
        borderRadius: '10px'
    }

    const [colorNow, setColor] = useState(color);
    const [styleNow, setStyle] = useState(firstStyle);

    const randomStyle = {
        width: '255px',
        height: '255px',
        margin: '50px',
        backgroundColor: colorNow,
        borderRadius: '10px'
    }
    
    function mouseAction(e) {
        let newColor;
        e.preventDefault();
        newColor = generateColor();
        setColor(newColor);
        setStyle(randomStyle);
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
