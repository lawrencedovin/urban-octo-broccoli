// forEach //
// doubleValues
function doubleValues(arr) {
  const doubleArray = [];
  arr.forEach((num) => {
    doubleArray.push(num*2);
  });
  return doubleArray;
}

console.log(doubleValues([1,2,3]));
console.log(doubleValues([5,1,2,3,10]));

// onlyEvenValues
function onlyEvenValues(arr) {
  const evenArray = [];
  arr.forEach((num) => {
    if(num % 2 === 0) evenArray.push(num);
  });
  return evenArray;
}

console.log(onlyEvenValues([1,2,3])); // [2]
console.log(onlyEvenValues([5,1,2,3,10])); // [2,10]

// showFirstAndLast
function showFirstAndLast(arr) {
  const firstLastArray = [];
  arr.forEach((letter) => {
    firstLastArray.push(letter[0]+letter[letter.length-1]);
  });
  return firstLastArray;
}

console.log(showFirstAndLast(['colt','matt', 'tim', 'test'])); // ["ct", "mt", "tm", "tt"]
console.log(showFirstAndLast(['hi', 'goodbye', 'smile'])); // ['hi', 'ge', 'se']

// addKeyAndValue
function addKeyAndValue(arr, key, value) {
  arr.forEach((val) => {
    val[key] = value;
  });
  return arr;
}
console.log(addKeyAndValue(
  [
    {name: 'Elie'},
    {name: 'Tim'},
    {name: 'Matt'},
    {name: 'Colt'}
  ],
    'title',
    'instructor'
  ));
  
  /*
    [
      {name: 'Elie', title:'instructor'},
      {name: 'Tim', title:'instructor'},
      {name: 'Matt', title:'instructor'},
      {name: 'Colt', title:'instructor'}
    ]
  */

// vowelCount
function vowelCount(str) {
  let splitString = str.split("");
  let obj = {};
  let vowels = 'aeiou';
  splitString.forEach((char) => {
    let lowerCase = char.toLowerCase();
    if(vowels.indexOf(lowerCase) !== -1) {
      obj[lowerCase] ? obj[lowerCase]++ : obj[lowerCase] = 1;
    }
  });
  return obj;
}

console.log(vowelCount('Elie')); // {e:2,i:1};
console.log(vowelCount('I Am awesome and so are you')); // {i: 1, a: 4, e: 3, o: 3, u: 1})

