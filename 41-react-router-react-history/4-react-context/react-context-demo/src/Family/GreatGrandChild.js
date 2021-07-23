import React, {useContext} from 'react';
import './GreatGrandChild.css';
import CountContext from './CountContext';
import ThemeContext from './ThemeContext';

const GreatGrandChild = () => {
    const {count, addToCount} = useContext(CountContext)
    const {color} = useContext(ThemeContext);

    return (
        <div style={{border: `4px solid ${color}`, padding: '20px'}}>
            <p>I'm a great-grandchild</p> 
            <p>I'm a consumer of count. It is {count}</p>
            <button onClick={addToCount}>great grandchild +1 button</button>
        </div>
    );
}

export default GreatGrandChild;