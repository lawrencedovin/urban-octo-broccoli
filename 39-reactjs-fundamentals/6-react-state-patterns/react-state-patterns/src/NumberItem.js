import React from 'react';

const NumberItem = ({num, remove}) => {
    const handleRemove = () => {
        remove(num);
    };

    return (
        <li>
            {/* <button onClick={() => remove(num)}>{num}</button> */}
            {num}
            <button onClick={handleRemove}>X</button>
        </li>
    );
}

export default NumberItem;