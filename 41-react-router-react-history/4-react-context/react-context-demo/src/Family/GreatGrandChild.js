import React, {useContext} from 'react';
import './GreatGrandChild.css';
import CountContext from './CountContext';

const GreatGrandChild = () => {
    const count = useContext(CountContext)
    return (
        <div className="GreatGrandChild">
            <p>I'm a great-grandchild</p> 
            <p>I'm a consumer of count. It is {count}</p>
        </div>
    );
}

export default GreatGrandChild;