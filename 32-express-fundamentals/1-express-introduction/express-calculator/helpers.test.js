const { mean, median, mode } = require('./helpers');

describe("#mean", () => {
    test("finds the mean of an array of numbers", () => { 
      expect(mean([1,-1,4,2])).toEqual(1.5);
    });
});

describe("#median", () => {
    test("finds the median of an array of numbers", () => { 
      expect(median([1,-1,4,3,2])).toEqual(2);
    });
});

describe("#mode", () => {
    test("finds the mode of an array of numbers", () => { 
      expect(mode([1,2,2,2,3,4,5,5,5,5])).toEqual(5);
    });
});