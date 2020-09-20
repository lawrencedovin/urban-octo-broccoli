// Quick Question #1
const nums = new Set([1,1,2,2,3,4]);
console.log(nums); // {1,2,3,4}

// Quick Question #2
console.log([...new Set("referee")].join("")); // ref

// Quick Question #3
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

console.log(m);
// {Array(3) => true, Array(3) => false}

// hasDuplicate

const hasDuplicate = ((arr) => new Set(arr).size !== arr.length);
console.log(hasDuplicate([1,3,2,1])); // true
console.log(hasDuplicate([1,5,-1,4])); // false

// vowelCount
// Write a function called vowelCount which 
// accepts a string and returns a map where the keys are 
// numbers and the values are the count of the vowels in the string.

function isVowel(char){
    return 'aeiou'.includes(char);
}

function vowelCount(str) {
    const vowelMap = new Map();
    for(let char of str){
        let lowerCaseChar = char.toLowerCase();
        if(isVowel(lowerCaseChar)) {
            if(vowelMap.has(lowerCaseChar)) {
                vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1)
            } else {
                vowelMap.set(lowerCaseChar, 1);
            }
        }
    }
    return vowelMap;
}

console.log(vowelCount('awesome')); // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }