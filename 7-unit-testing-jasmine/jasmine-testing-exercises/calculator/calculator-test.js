
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = { amount: 3214, years: 30, rate: 20};
  expect(calculateMonthlyPayment(values)).toEqual('53.71');
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = { amount: 3000, years: 100, rate: 5};
  expect(calculateMonthlyPayment(values)).toEqual('12.59');
});

/// etc
