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
// Doesn't display name refers to window object