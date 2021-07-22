import React from 'react';
import GreatGrandChild from './GreatGrandChild';
import './GrandChild.css';

const GrandChild = () => {
    return (
        <div className="GrandChild">
            <p>I'm the grandchild!</p>
            <GreatGrandChild />
        </div>
    );
};

export default GrandChild;