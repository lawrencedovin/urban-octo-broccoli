// filter //
// filterByValue
function filterByValue(arr, key) {
  return arr.filter((obj) => {
    if (obj[key]) return obj;
  });
}

console.log(
  filterByValue(
    [
      { first: "Elie", last: "Schoppik" },
      { first: "Tim", last: "Garcia", isCatOwner: true },
      { first: "Matt", last: "Lane" },
      { first: "Colt", last: "Steele", isCatOwner: true },
    ],
    "isCatOwner"
  )
);

// find
function find(arr, value) {
  return arr.filter((num, i) => {
    return num === value ? i : undefined;
  })[0];
}

console.log(find([1,2,3,4,5], 3)); // 3
console.log(find([1,2,3,4,5], 10)) // undefined

// findInObj
function findInObj(arr, key, value) {
  return arr.filter((val) => {
    return val[key] === value;
  })[0];
}

console.log(findInObj(
  [
    {first: 'Elie', last:"Schoppik"},
    {first: 'Tim', last:"Garcia", isCatOwner: true},
    {first: 'att', last:"Lane"},
    {first: 'Colt', last:"Steele", isCatOwner: true}
  ],
  'isCatOwner',
  true
));

// removeVowels
function removeVowels(str) {
  let splitStr = str.split("");
  let vowels = 'aeiou;'
  return splitStr.filter((letter) => {
    let lowercaseLetter = letter.toLowerCase();
    return vowels.indexOf(lowercaseLetter) === -1;
    }).join("");
  }

console.log(removeVowels('Elie')); // ('l')
console.log(removeVowels('TIM')); // ('tm')
console.log(removeVowels('ZZZZZZ')); // ('zzzzzz')

// doubleOddNumbers

function doubleOddNumbers(arr) {
  let filteredArray = [];
  arr.filter((num) => {
    if(num % 2 === 1) filteredArray.push(num*2)
  })
  return filteredArray;
}

console.log(doubleOddNumbers([1,2,3,4,5])) // [2,6,10]
console.log(doubleOddNumbers([4,4,4,4,4])) // []

// doubleOddNumbers Springboard
function doubleOddNumbers(arr) {
  return arr.filter((val) => {
      return val % 2 !== 0;
    }).map(function(val) {
      return val * 2;
    });
  }