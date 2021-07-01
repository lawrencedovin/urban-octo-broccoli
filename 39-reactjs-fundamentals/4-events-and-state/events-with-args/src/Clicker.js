import React from 'react';
const Clicker = () => {
    const fireLaser = (() => {
        console.log("Lasers have been fired!");
        console.log("Zarp, pew pew pew!");
    });

    return (
        <>
            <button onClick={fireLaser}>Fire lazer? 🤔</button>
        </>
    )
}

export default Clicker;