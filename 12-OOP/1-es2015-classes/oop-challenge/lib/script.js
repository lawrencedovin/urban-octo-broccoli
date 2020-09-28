// Part 1
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  honk() {
    console.log("Beep.");
  }

  toString(){
    const {make, model, year} = this;
    console.log(`This vehicle is a ${make} ${model} from ${year}.`);
  }
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.honk(); // "Beep."
myFirstVehicle.toString(); // "The vehicle is a Honda Monster Truck from 1999."

// Part 2
class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

let myFirstCar = new Car("Toyota", "Corolla", 2005);
myFirstCar.toString(); // "The vehicle is a Toyota Corolla from 2005."
myFirstCar.honk();     // "Beep."
console.log(myFirstCar.numWheels);  // 4

// Part 3
class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }

  revEngine() {
    console.log("VROOM!!!");
  }
}

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

myFirstMotorcycle.toString();
// "The vehicle is a Honda Nighthawk from 2000."

myFirstMotorcycle.honk();     // "Beep."
myFirstMotorcycle.revEngine(); // "VROOM!!!"
console.log(myFirstMotorcycle.numWheels);  // 2

// Part 4
class Garage {
  constructor(capacity){
    this.vehicles = [];
    this.capacity = capacity;
  }

  add(vehicle) {
    const {vehicles, capacity} = this;
    if(vehicle instanceof Vehicle) {
      if(vehicles.length < capacity) {
        vehicles.push(vehicle);
        console.log("Vehicle added!");
      }
      else console.log("Sorry we are full.");
    }
    else console.log("Only vehicles are allowed in here!");
  }
}

let garage = new Garage(2);
garage.vehicles; // []
garage.add(new Car("Hyundai", "Elantra", 2015)); // "Vehicle added!"
garage.vehicles; // [Car]
garage.add("Taco"); // "Only vehicles are allowed in here!"

garage.add(new Motorcycle("Honda", "Nighthawk", 2000));
// "Vehicle added!"
garage.vehicles; // [Car, Motorcycle]

garage.add(new Motorcycle("Honda", "Nighthawk", 2001));
// "Sorry, we're full."