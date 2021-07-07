import React, { useState } from 'react';
import './Dice.css';

const Dice = (({numDice=6, title='Main Game', maxVal=20}) => {
    const [numbers, setNumbers] = useState(Array.from({length: numDice}));
    const rollDice = () => {
        setNumbers(numbers => (
            numbers.map(num => Math.floor(Math.random() * maxVal) + 1)
        ))
    }
    // const dice = [];
    // for(let i=0; i<numDice; i++) {
    //     const num = Math.floor(Math.random() * maxVal) + 1;
    //     dice.push(num);
    // }
    // const random = () => setNumbers(dice);
    return (
        <div>
            <h1>{title}</h1>
            {/* {dice.map(num => <div className="Die">{num}</div>)} */}
            {numbers.map(num => <div className="Die">{num}</div>)}
            <button onClick={rollDice}>Roll</button>
        </div>
    );
})

export default Dice;