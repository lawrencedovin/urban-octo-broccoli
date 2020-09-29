const cat = {
  name: 'Blue',
  breed: 'Garfield',
  dance(dance) {
    console.log(`This is: ${this}`);
    console.log(`Meow, I am ${this.name} and I like to ${dance}`);
  }
}

class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  dance(danceType) {
    console.log(`This is: ${this}`);
    console.log(`Meow, I am ${this.name} and I like to ${danceType}`);
  }
}

const rocket = new Cat('rocket', 'tabby');
rocket.dance('tango');

const rocketDance = rocket.dance;
rocketDance('tango'); // Undefined because of strict mode





cat.dance("salsa");
const bluesDance = cat.dance;
bluesDance("hip hop");
// same as window.bluesDance no name property on window
// Doesn't display name refers to window object
