import React from 'react';

function FixedComponent({favNum=42}) {
    return (
        <div>
            <p>Hello, I'm a FixedComponent!</p>
            <p>Here are some numbers:</p>
            <p>{favNum}</p>
            <p>{favNum + 1}</p>
            <p>{favNum + 2}</p>
        </div>
    );
}

export default FixedComponent;