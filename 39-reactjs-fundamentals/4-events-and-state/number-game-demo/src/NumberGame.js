import React, {useState} from "react";
import './NumberGame.css';

const NumberGame = (() => {
    const genRandomNumber = () => Math.floor(Math.random() * 10) + 1;
    const [guess, setGuess] = useState(genRandomNumber);
    const [target, setTarget] = useState(genRandomNumber);
    const isWinner = target === guess;
    const restart = () => {
        setTarget(genRandomNumber);
        setGuess(genRandomNumber);
    }
    return(
        <div className="NumberGame">
            <h1>Target Num: {target}</h1>
            <h1 className={isWinner ? 'winner' : 'loser'}>Your Guess: {guess}</h1>
            {!isWinner ? 
                <button onClick={() => setGuess(genRandomNumber)}>Generate Number</button> 
                :
                <button onClick={restart}>Restart</button>
            }
        </div>
    )
})

export default NumberGame;