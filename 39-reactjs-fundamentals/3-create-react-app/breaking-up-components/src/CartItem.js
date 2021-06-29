const CartItem = (({name, img, price, qty}) => {
    return (
        <div>
            <h4>{name}</h4>
            <img src={img} width="200" alt={name}/>
            <ul>
            <li>Price: ${price}</li>
            <li>Quantity: {qty}</li>
            <li>Subtotal: ${price * qty}</li>
            </ul>
        </div>
    );
})

export default CartItem;