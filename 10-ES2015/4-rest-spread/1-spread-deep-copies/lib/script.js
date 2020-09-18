const shoppingCart = [
  {
    name: 'honey orchid',
    quantity: 2,
    price: 13.5
  },
  {
    name: 'african solstice',
    quantity: 4,
    price: 25.99
  }
];

const cartCopy = [...shoppingCart];

shoppingCart[0]
cartCopy[0]
cartCopy[0] === shoppingCart[0]
// Same exact reference it isn't a copy

cartCopy[0].quantity = 99;
// updates both shoppingCart and cartCopy