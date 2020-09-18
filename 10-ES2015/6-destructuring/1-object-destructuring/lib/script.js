// Take in any amount of numbers and arr them

const avg = (...num) => num.reduce((initial, nextValue) => (initial + nextValue)) / num.length;
console.log(avg(1,2,3,6,7));

const teaOrder = {
    variety: 'oolong',
    teaName: 'winter sprout',
    origin: 'taiwan',
    price: 12.99,
    hasCaffeine: true,
    quantity: 3
}

// const {variety, teaName, origin, price, hasCaffeine, quantity} = teaOrder;

// console.log(`${teaName} from ${origin} at $${price}`);

const {teaName, origin, quantity, ...others} = teaOrder;
// rest example

const newTea = {...teaOrder};
// spread example

console.log(`${teaName} from ${origin} at $${price}`);
