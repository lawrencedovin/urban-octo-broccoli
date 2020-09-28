class Triangle {
  constructor(a, b, c) {
    for(let side of [a,b,c]) {
      if(!Number.isFinite(side) || side <= 0) throw new Error(`Invalid side: ${side}`);
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }
  getArea() {
    const {a, b, c} = this;
    const s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
  }
  display() {
    const {a, b, c} = this;
    console.log(`I am a triangle with sides ${a} ${b} ${c}.`);
  }
}

const t1 = new Triangle(3, 4, 5);
t1.display();

// constructors don't return a value they just set values and check valid input