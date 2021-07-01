import React from 'react';
const Clicker = () => {
    const fireLaser = ((e) => {
        // const data = {name: 'Willy', age: 78};
        // console.log(data);
        // data.name = null;
        console.log(e);
        // console.log("Lasers have been fired!");
        // console.log("Zarp, pew pew pew!");
    });

    return (
        <>
            <button onClick={fireLaser}>Fire lazer? 🤔</button>
        </>
    )
}

export default Clicker;