function Dog(name, breed, age) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.bark = function() {
        return `${this.name} says WOOF WOOF!!`
    }
}

Dog.prototype.howl = function() {
    return `${this.name} says AWOOOOoooo!!`
}

const popcorn = new Dog('Popcorn', 'golden doodle', 1);
const harry = new Dog('Harry', 'sheepdog', 4);
harry.howl();

// prototype.howl does not exist on the harry Object itself but can still be called.

/**
 * bark method differs each Object because the method redefines on every single individual
 * dog object we create.
 * 
 * prototype Howl refers to same function so it is better because it doesn't need to constantly
 * redefine per instance but any instance created can refer to the same prototype function. It 
 * is less redundant.
 * 
 * popcorn.bark === harry.bark -> false
 * popcorn.howl === harry.howl -> true
 * */ 

/**
 * If we use a class Dog, the methods outside of a constructor 
 * automatically go to a prototype.
 */

class Dog {
    constructor(name, breed, age) {
        this.name = name;
        this.breed = breed;
        this.age = age;
    }
    bark() {
        console.log(`${this.name} barked!`);
    }
}