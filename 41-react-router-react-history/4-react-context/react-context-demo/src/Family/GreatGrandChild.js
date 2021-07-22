import React, {useContext} from 'react';
import './GreatGrandChild.css';
import CountContext from './CountContext';

const GreatGrandChild = () => {
    const {count, addToCount} = useContext(CountContext)

    return (
        <div className="GreatGrandChild">
            <p>I'm a great-grandchild</p> 
            <p>I'm a consumer of count. It is {count}</p>
            <button onClick={addToCount}>great grandchild +1 button</button>
        </div>
    );
}

export default GreatGrandChild;