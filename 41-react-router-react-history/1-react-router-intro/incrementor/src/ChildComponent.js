import React from 'react';

const ChildComponent = ({count, handleIncrement}) => {
    return (
        <>
            <h1>Incrementor</h1>
            <p>{count}</p>
            <button onClick={handleIncrement}>+</button>
        </>
    );

}

export default ChildComponent;