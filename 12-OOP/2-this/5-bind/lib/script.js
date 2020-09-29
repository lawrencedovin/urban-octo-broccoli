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
