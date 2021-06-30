import React from 'react';
import './CartItem.css';

const CartItem = (({name, img, price, qty}) => {
    return (
        <div className="CartItem">
            <h4>{name}</h4>
            <img className="CartItem__img" src={img} alt={name}/>
            <ul>
            <li>Price: ${price}</li>
            <li>Quantity: {qty}</li>
            <li>Subtotal: ${price * qty}</li>
            </ul>
        </div>
    );
})

export default CartItem;