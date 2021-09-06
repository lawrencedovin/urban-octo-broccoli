function Animal(species) {
    this.species = species;
    this.isFed = true;
}

Animal.prototype.stopFeeding = function() {
    if(this.isFed) { 
        this.Fed = false;
        return `The ${this.species} stopped being fed.`
    }
    return `Already isn't being fed`;
}

function Dog(name, breed, age) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.bark = function() {
        console.log(`${this.name} says WOOF!`);
    }
}

Dog.prototype.howl = function() {
    console.log(`${this.name} says AWOOOoooo!`);
}

// Make the dog prototype a new object where 
// its prototype is set to Animal prototype.
Dog.prototype = Object.create(Animal.prototype);

const ruf = new Dog('ruf', 'pug', 2);

// Fails since there's no this.species or this.isFed in Dog
console.log(ruf.isFed);
console.log(ruf.stopFeeding());
console.log(ruf.isFed);