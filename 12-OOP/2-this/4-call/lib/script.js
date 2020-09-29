const cat = {
  name: 'Blue',
  breed: 'Garfield',
  dance(dance) {
    console.log(`This is: ${this}`);
    console.log(`Meow, I am ${this.name} and I like to ${dance}`);
  },
  play(...toys){
    for(toy of toys){
      console.log(`${this.name} plays with ${toy}`);
    }
  }
}

const blueDance = cat.dance;
blueDance.call(cat, "jitterbug");

const dog = {
  breed: 'Black Lab',
  name: 'Elton'
};

blueDance.call(dog, "flamingo");

function printThis() {
  console.log(`This ===> ${this}`);
}

printThis.call(cat);

cat.play.call(dog, 'bone', 'my cat');