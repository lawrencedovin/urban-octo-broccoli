function Triangle(a, b) {
  this.a = a;
  this.b = b;
};

// References a single method everytime Triangle gets instatiated.
// 1 single copy
Triangle.prototype.getArea = function() {
  return this.a * this.b / 2;
}

Triangle.prototype.getHypotenuse = function() {
  return Math.sqrt(this.a ** 2 + this.b ** 2);
}
// Classes allow us to get the same functionality as the code above


const t1 = new Triangle(2,3);
t1.getHypotenuse();

// Don't usually use prototypes
Array.prototype.push = function(val) {
  console.log(`So you want to add ${val}??`);
  console.log('Sorrry do not want to');
}

const nums = [1,2,3];
nums.push(9) // Overrides and changes functionality

// Only exception is polyfill, anytime there is a newer method
// in JS, that isn't implemented in all the browsers.
// You can add the prototype to your file.

// ie.
if(!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    'use strict';

    if(search instanceof RegExp) {
      throw TypeError('first argument must not be a RegExp');
    }
    if(start === undefined) { start = 0; }
    return this.indexOf(search, start) !== -1;
  };
}