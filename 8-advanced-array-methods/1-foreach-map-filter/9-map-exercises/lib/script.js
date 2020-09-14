// map //
// doubleValues
function doubleValuesWithMap(arr) {
  return arr.map((num) => {
    return num*2;
  });
}

console.log(doubleValuesWithMap([1,2,3])); // [2,4,6]
console.log(doubleValuesWithMap([1,-2,-3])); // [2,-4,-6]

// valTimesIndex
function valTimesIndex(arr){
  return arr.map((val, i) => {
    return val*i;
  }); 
}

console.log(valTimesIndex([1,2,3])); // [0,2,6]
console.log(valTimesIndex([1,-2,-3])); // [0,-2,-6]

// extractKey
function extractKey(arr, key){
  return arr.map((value) => {
    return value[key];
  });
}

console.log(extractKey(
  [
    {name: 'Elie'},
    {name: 'Tim'},
    {name: 'Matt'},
    {name: 'Colt'}
  ],
  'name'
));

// extractFullName
function extractFullName(arr) {
  return arr.map((value) => {
    return `${value.first} ${value.last}`;
    // return `${value[Object.keys(value)[0]]}  ${value[Object.keys(value)[1]]}`;
  });
}

console.log(extractFullName([
  {first: 'Elie', last:"Schoppik"},
  {first: 'Tim', last:"Garcia"},
  {first: 'Matt', last:"Lane"},
  {first: 'Colt', last:"Steele"}
]));

