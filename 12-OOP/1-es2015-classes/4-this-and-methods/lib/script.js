// function getHypotenuse(a, b) {
//   return Math.sqrt(a ** 2 + b ** 2);
// }

// function getArea(a, b) {
//   return a * b / 2;
// }

// let side1 = 4;
// let side2 = 3;
// const side3 = getHypotenuse(side1, side2);

// const area = getArea(side1, side2);
// side1 = 9;
// side2 = 8;
// getHypotenuse(side1, side2);

const rightTriangle = {
  a: 9,
  b: 12,
  printThis() {
    console.log(this);
  },
  getArea() {
    return this.a * this.b / 2;
  },
  getHypotenuse() {
    this.printThis();
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }
};