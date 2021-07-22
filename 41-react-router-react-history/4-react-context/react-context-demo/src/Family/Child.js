import React, {useState} from 'react';
import GrandChild from './GrandChild';
import './Child.css';
import CountContext from './CountContext';

const Child = () => {
    const [count, setCount] = useState(0);
    const addToCount = () => {
        setCount(count + 1);
    }
    return (
        <CountContext.Provider value={count}>
            <div className="Child">
                <p>I'm the child!</p>
                <p>I own count. It is: {count}</p>
                <button onClick={addToCount}>+</button>
                <GrandChild />
            </div>
        </CountContext.Provider>
    );
}

export default Child;