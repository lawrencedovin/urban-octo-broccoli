// hasOddNumber
function hasOddNumber(arr) {
  return arr.some((num) => {
    return num % 2 === 1; 
  });
}

console.log(hasOddNumber([1,2,2,2,2,2,4])); // true
console.log(hasOddNumber([2,2,2,2,2,4])); // false

// hasAZero
function hasAZero(arr) {
  numArray = arr.toString().split("");
  return numArray.some((num) => {
    return num === "0"; 
  });
}

console.log(hasAZero(33321232131012)); //true
console.log(hasAZero(1212121)); // false

// hasOnlyOddNumbers
function hasOnlyOddNumbers(arr) {
  return arr.every((num) => {
    return num % 2 === 1;
  });
}

console.log(hasOnlyOddNumbers([1,3,5,7])); // true
console.log(hasOnlyOddNumbers([1,2,3,5,7])); // false

// hasNoDuplicates
function hasNoDuplicates(arr) {
  return arr.every((num) => {
    return arr.indexOf(num) === arr.lastIndexOf(num);
  });
}

console.log(hasNoDuplicates([1,2,3,1])); // false
console.log(hasNoDuplicates([1,2,3])); // true

let arr = [
  {title: "Instructor", first: 'Elie', last:"Schoppik"},
  {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
  {title: "Instructor", first: 'Matt', last:"Lane"},
  {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
];

// hasCertainKey
function hasCertainKey(arr, key) {
  return arr.every((val) => {
    return key in val;
  });
}

console.log(hasCertainKey(arr,'first')); // true
console.log(hasCertainKey(arr,'isCatOwner')); // false

// hasCertainValue
function hasCertainValue(arr, key, searchValue){
  return arr.every(function(val){
    return val[key] === searchValue;
  })
};

console.log(hasCertainValue(arr,'title','Instructor')); // true
console.log(hasCertainValue(arr,'first','Elie')); // false