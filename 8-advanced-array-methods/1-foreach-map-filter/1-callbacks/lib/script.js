function holler() {
  console.log('Hey You!');
}

// Function Expression
const whisper = () => {
  console.log('psstt I have a secret');
};

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

const mathFuncs = [add, subtract, multiply, divide];
console.log(mathFuncs[3](4,5));

// Callback
setTimeout(whisper, 4000);

doMath(5,6,add);

function doMath(x, y, func) {
  return func(x,y);
}

function doAllMath(a, b, mathFuncs) {
  for(func of mathFuncs){
    console.log(func(a, b));
  }
}