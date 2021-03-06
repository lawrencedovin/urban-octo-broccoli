import React from 'react';

const Item = (({id, name, quantity}) => {
    return (
        <ul>
            <li>ID: {id}</li>
            <li>Product: {name}</li>
            <li>Quantity: {quantity}</li>
        </ul>
    );
});

export default Item;