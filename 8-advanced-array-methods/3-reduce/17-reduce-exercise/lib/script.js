// extractValue
const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];

function extractValue(arr, key) {
  return arr.reduce((valueArr, nextValue) => {
    valueArr.push(nextValue[key]);
    return valueArr;
  }, []);
}

console.log(extractValue(arr,'name'));  // ['Elie', 'Tim', 'Matt', 'Colt']

// vowelCount
function vowelCount(str) {
  const vowels = 'aeiou';
  const arr = str.toLowerCase().split("");
  return arr.reduce((obj, nextValue) => {
    if(vowels.indexOf(nextValue) !== -1){
      obj[nextValue] ? obj[nextValue] += 1 : obj[nextValue] = 1;
    }
    return obj;
  }, {});
}

console.log(vowelCount('Elie')); // {e:2,i:1};
console.log(vowelCount('I Am awesome and so are you')) // {i: 1, a: 4, e: 3, o: 3, u: 1};
console.log(vowelCount('hmmm')); // {};

// addKeyAndValue
function addKeyAndValue(arrObj, key, value){
  return arrObj.reduce((accumulator, next, index)=>{
    accumulator[index][key] = value;
    return arrObj;
  }, arrObj);
}

const arrObj = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];

console.log(addKeyAndValue(arrObj, 'title', 'Instructor')); 

// [
//   {name: 'Elie', title: 'Instructor'},
//   {name: 'Tim', title: 'Instructor'},
//   {name: 'Matt', title: 'Instructor'},
//   {name: 'Colt', title: 'Instructor'}
// ]

// partition
function partition(arr, callback){
  return arr.reduce((accumulator,nextValue) => {
      callback(nextValue) ? accumulator[0].push(nextValue) : accumulator[1].push(nextValue);
      return accumulator;
  }, [[],[]]);
}

function isEven(val){
  return val % 2 === 0;
}

const arrPartition = [1,2,3,4,5,6,7,8];

partition(arrPartition, isEven) // [[2,4,6,8], [1,3,5,7]];

function isLongerThanThreeCharacters(val){
  return val.length > 3;
}

const names = ['Elie', 'Colt', 'Tim', 'Matt'];

partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]

