const blue = {
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

const rocket = {
  name: 'Rocket',
  breed: 'Himalayan'
};

const bDance = blue.dance;
const boundDance = bDance.bind(blue);

const rocketDance = blue.dance.bind(rocket);

const dog = {
  name: 'Tyson',
  breed: 'Mini Aussie',
  dance: rocketDance // Is the value of rocket
};