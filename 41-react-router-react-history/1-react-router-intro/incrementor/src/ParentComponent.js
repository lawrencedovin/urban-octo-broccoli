import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

// Parent is used for handling states and onClick
// Child is used for the skeleton where the parent gives off the property values
const ParentComponent = () => {

    const [count, setCount] = useState(0);
    const handleIncrement = () => setCount(count+1);

    return(<ChildComponent count={count} handleIncrement={handleIncrement}/>);
}

export default ParentComponent;