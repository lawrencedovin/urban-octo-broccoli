import React from 'react';

const ChildComponent = ({num, handleClick}) => {
    return (
        <>
            <p>{num}</p>
            <button onClick={handleClick}>Increment by 1</button>
        </>
    );
};

export default ChildComponent;