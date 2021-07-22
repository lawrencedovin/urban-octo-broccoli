import React from 'react';
import GrandChild from './GrandChild';
import './Child.css';

const Child = () => {
    return (
        <div className="Child">
            <p>I'm the child!</p>
            <GrandChild />
        </div>
    );
}

export default Child;