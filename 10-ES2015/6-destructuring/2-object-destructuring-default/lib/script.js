const teaOrder = {
    variety: 'oolong',
    teaName: 'winter sprout',
    origin: 'taiwan',
    price: 12.99,
    hasCaffeine: true,
    quantity: 3
}

const {price, quantity, ...others} = teaOrder;

const {brewTemp: temp = 175} = teaOrder;
// Only use this if brewTemp has no value in the teaOrder Object

console.log(temp);

const { teaName: tea } = teaOrder;
console.log(tea);

function checkout(tea) {
    const {quantity = 1, price} = tea;
    return quantity * price;
}

console.log(checkout(teaOrder));

const order1 = {
    variety: 'green',
    teaName: 'silver needle',
    origin: 'taiwan',
    price: 12.99,
    hasCaffeine: true
}

console.log(checkout(order1));