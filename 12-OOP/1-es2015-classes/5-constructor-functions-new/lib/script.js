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

function Triangle(a, b) {
  this.a = a;
  this.b = b;
  this.getArea = function() {
    return this.a * this.b / 2;
  }
  this.getHypotenuse = function() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }
};

const t1 = new Triangle(2,3);