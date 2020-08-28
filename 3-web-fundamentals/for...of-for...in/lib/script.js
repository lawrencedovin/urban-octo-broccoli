// Values
// let arr = ['a', 'b', 'c', 'd'];

// for (let n of arr) {
//   // what will n be?
//   console.log(n);
// }

// // Index

// for (let n in arr) {
//   // what will n be?
//   console.log(n);
// }

/////////////////////////////////////////////////////////

const colors = ['red', 'teal', 'cyan', 'yellow'];

for(color of colors){
  console.log(color);
}

const Pogi = {
  name: 'Lawrence',
  age: 27
};

for(let key in Pogi){
  console.log(`${key} -> ${Pogi[key]}`);
}