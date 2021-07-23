import React, {useContext, useState} from 'react';
import GrandChild from './GrandChild';
import './Child.css';
import CountContext from './CountContext';
import ThemeContext from './ThemeContext';

const Child = () => {
    const [count, setCount] = useState(0);
    const {color} = useContext(ThemeContext);
    const addToCount = () => {
        setCount(count + 1);
    }
    return (
        <CountContext.Provider value={{count, addToCount}}>
            <div style={{border: `4px solid ${color}`, padding: '20px', width: '500px'}}>
                <p>I'm the child!</p>
                <p>I own count. It is: {count}</p>
                <button onClick={addToCount}>+</button>
                <GrandChild />
            </div>
        </CountContext.Provider>
    );
}

export default Child;