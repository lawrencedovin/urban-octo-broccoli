import React from 'react';

const ButtonGroup = (() => {
    const printColor = (color) => {
        console.log(`You Clicked ${color.toUpperCase()}`);
    }
    return (
        <div>
            <button onClick={() => printColor('Red')} style={{backgroundColor: 'red'}}>Red</button>
            <button onClick={() => printColor('Yellow')} style={{backgroundColor: 'yellow'}}>Yellow</button>
            <button onClick={() => printColor('Green')} style={{backgroundColor: 'green'}}>Green</button>
        </div>
    );
});

export default ButtonGroup;