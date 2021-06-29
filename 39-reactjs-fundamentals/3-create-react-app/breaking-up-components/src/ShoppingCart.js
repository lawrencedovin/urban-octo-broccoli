import CartItem from "./CartItem";
const ShoppingCart = (({ items, username}) => {

    const total = items.reduce((acc, item) => {
      return acc + item.price * item.qty;
    }, 0);

    return (
      <div>
        <h1>{username}'s Shopping Cart</h1>
        <div>
            {items.map(item => (
              <CartItem name={item.name} img={item.img} price={item.price} qty={item.qty}/>
            ))}
        </div>
        <b>Total ${total}</b>
      </div>
    );
})

export default ShoppingCart;