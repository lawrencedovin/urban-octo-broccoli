function countZeroes(array) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while(leftIndex <= rightIndex) {
    let middleIndex = Math.ceil((leftIndex + rightIndex) / 2);
    
    if(array[leftIndex + 1] === 1) leftIndex = middleIndex + 1;
    else if(array[rightIndex - 1] === 0) rightIndex = middleIndex - 1;
    else {
      return array[rightIndex] !== 0 ? 0 : array.length - middleIndex;
      // return `First Zero: ${array[middleIndex]} Index: ${middleIndex}`;
    }
  }
}

console.log(countZeroes([1,1,1,1,0,0])) // 2
console.log(countZeroes([1,0,0,0,0])) // 4
console.log(countZeroes([0,0,0])) // 3
console.log(countZeroes([1,1,1,1])) // 0
console.log(countZeroes([1,2,3,4])) // 0

module.exports = countZeroes