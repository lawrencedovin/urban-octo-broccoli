const { mean, median, mode } = require('./helpers');

describe("#mean", function () {
    test("finds the mean of an array of numbers", function () { 
      expect(mean([1,-1,4,2])).toEqual(1.5)
    })
  })