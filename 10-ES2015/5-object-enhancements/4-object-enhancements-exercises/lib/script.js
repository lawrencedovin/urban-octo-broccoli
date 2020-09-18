// Same keys and values
function createInstructor(firstName, lastName){
  return {
    firstName,
    lastName
  };
}

// Computed Property Names
let favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite"
}

// Object Methods
const instructor = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye (){
    return this.firstName + " says bye!";
  }
}

// createAnimal function

function createAnimal(species, verb, noise){
  return {
    species: species,
    [verb] () {
      return noise;
    }
  };
}

const dog = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
console.log(dog.bark());  //"Woooof!"

const sheep = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
console.log(sheep.bleet()); //"BAAAAaaaa"