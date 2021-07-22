import React, {useState} from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    let [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1)
    }
    return (
        <>
            <ChildComponent num={count} handleClick={handleClick} />
        </>
    );
};

export default ParentComponent;