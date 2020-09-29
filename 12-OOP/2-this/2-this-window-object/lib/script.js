const cat = {
  name: 'Blue',
  breed: 'Garfield',
  dance(dance) {
    console.log(`This is: ${this}`);
    console.log(`Meow, I am ${this.name} and I like to ${dance}`);
  }
}

cat.dance("salsa");
const bluesDance = cat.dance;
bluesDance("hip hop");
// same as window.bluesDance no name property on window
// Doesn't display name refers to window object

function whatIsThis() {
  console.log(`this = ${this}`);
}

const myObj = {
  func: whatIsThis,
  color: 'purple'
};

myObj.func();
