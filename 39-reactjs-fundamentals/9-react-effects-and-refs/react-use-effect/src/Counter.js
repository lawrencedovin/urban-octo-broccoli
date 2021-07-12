import React, {useState, useEffect} from 'react';

const Counter = (() => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };
    
    // Only runs after each render
    useEffect(() => {
        console.log("RUNNNINNGGG CALLBACK!");
        document.title = `Hi ${'!'.repeat(count)}`;
    })

    return (
        <div>
            {console.log("RENDERING!")}
            Let's get excited counting.
            <button onClick={increment}>+</button>
            <p>Counter: {count}</p>
        </div>
    );
});

export default Counter;