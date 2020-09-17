/* Write an ES2015 Version */

function double(arr) {
    return arr.map((val) => val * 2);
  }

console.log(double([2,3,4,5]));

const squareAndFindEvens = (numbers) => {
    var squares = numbers.map((num) => num ** 2);
    var evens = squares.filter((square) =>  square % 2 === 0);
    return evens;
}

// const squareAndFindEvens = numbers => numbers.map(val => val ** 2).filter(square => square % 2 === 0)

console.log(squareAndFindEvens([2,3,4,5]));
