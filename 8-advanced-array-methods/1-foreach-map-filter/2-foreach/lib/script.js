const colors = ['teal', 'cyan', 'peach', 'purple'];

function upperCase(val) {
  console.log(val.toUpperCase());
}

function yell(val, i) {
  const caps = val.toUpperCase();
  console.log(`At index ${i}, ${caps}`);
}

colors.forEach(yell);

// const prices = [30.99, 19.99, 2.5, 99.0];
// let total = 0;

// prices.forEach((price) => {
//   total += price;
//   console.log(total);
// });

const prices = [30.99, 19.99, 2.5, 99.0];
let total = 0;

for(price of prices){
  total += price;
  console.log(total);
}