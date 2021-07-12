import React, { useState } from 'react';
import NumberItem from './NumberItem';

const NumberList = (() => {
    const [numbers, setNumbers] = useState([2,5,7,11,12,11,18]);
    const remove = (num) => {
        setNumbers(numbers.filter((n) => n !== num));
    }
    return (
        <ul>
            {numbers.map((n, idx) => (
                <NumberItem num={n} key={idx} remove={remove} />
            ))}
        </ul>
    );
});

export default NumberList;