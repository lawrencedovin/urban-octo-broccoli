function countZeroes(arr) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while(leftIndex <= rightIndex) {
    let countZero = 0;
    let middleIndex = Math.round((leftIndex + rightIndex) / 2);
    let middleValue = arr[middleIndex];

    if(middleValue < 1) {
        countZero += 1;
        
    }
    else if(middleValue === 1) {
        middleIndex += 1;
    }
    else {
        return countZero;
    }
  }
}

console.log(countZeroes([1,1,1,1,0,0])) // 2
console.log(countZeroes([1,0,0,0,0])) // 4
console.log(countZeroes([0,0,0])) // 3
console.log(countZeroes([1,1,1,1])) // 0

module.exports = countZeroes