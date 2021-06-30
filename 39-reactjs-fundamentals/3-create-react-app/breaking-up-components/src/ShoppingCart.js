import React from "react";
import CartItem from "./CartItem";
import "./ShoppingCart.css";

const ShoppingCart = (({ items, username}) => {

    const total = items.reduce((acc, item) => {
      return acc + item.price * item.qty;
    }, 0);

    return (
      <div className="ShoppingCart">
        <h1 className="ShoppingCart__header">{username}'s Shopping Cart</h1>
        <div>
            {items.map(item => (
              <CartItem name={item.name} img={item.img} price={item.price} qty={item.qty}/>
            ))}
        </div>
        <b className="ShoppingCart__total">Total ${total}</b>
      </div>
    );
})

export default ShoppingCart;