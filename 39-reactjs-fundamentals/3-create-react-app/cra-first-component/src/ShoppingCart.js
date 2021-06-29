const ShoppingCart = (({items}) => {
    return (
      <div>
        <h1>Shopping Cart</h1>
        <div>
            {items.map(item => (
            <div>
                <h4>{item.name}</h4>
                <img src={item.img} width="200" alt={item.name}/>
                <ul>
                <li>Price: ${item.price}</li>
                <li>Quantity: {item.qty}</li>
                <li>Subtotal: ${item.price*item.qty}</li>
                </ul>
            </div>
            ))}
        </div>
      </div>
    );
})

export default ShoppingCart;