function enoughFunds(price, qty, balance) {
  const subtotal = (price * qty).toFixed(1);
  console.log(`subtotal: ${subtotal}`);
  console.log(`balance: ${balance}`);
  if(subtotal <= balance) return 'YOU HAVE ENOUGH MONEY';
  return 'Sorry, you need more moneh';
}

console.log(enoughFunds(200.3, 3, 600.9));
// subtotal: 600.90000001
// balance: 600.9
// Decimals need to be percise which is why there is a 
// Sorry, you need more moneh error 