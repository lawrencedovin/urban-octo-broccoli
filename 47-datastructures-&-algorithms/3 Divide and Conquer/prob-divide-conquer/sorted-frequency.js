function findFirstIndex(array, value) {
    let leftIndex = 0;
    let rightIndex = array.length - 1;

    while(leftIndex <= rightIndex) {
        let middleIndex = Math.ceil((leftIndex + rightIndex) / 2);

        if(array[leftIndex] === value) return leftIndex;
        if(array[rightIndex - 1] === value) rightIndex = middleIndex - 1;
        else if(array[leftIndex + 1] !== value) leftIndex = middleIndex + 1;
        else return middleIndex;
    }
    return -1;
}

function findLastIndex(array, value) {
    let leftIndex = 0;
    let rightIndex = array.length - 1;

    while(leftIndex <= rightIndex) {
        let middleIndex = Math.ceil((leftIndex + rightIndex) / 2);

        if(array[middleIndex] === value 
            && (array[middleIndex + 1] > value 
            || array[middleIndex - 1] < value)) {
                return middleIndex;
        }
        else if(array[leftIndex] !== value && array[leftIndex] < value) leftIndex = middleIndex + 1;
        else if(array[rightIndex] !== value && array[rightIndex] > value) rightIndex = middleIndex - 1;
    }
    return -1;
}

function sortedFrequency(array, value) {
    let firstValueIndex = findFirstIndex(array, value);
    let lastValueIndex = findLastIndex(array, value);
    let count = firstValueIndex === -1 ? -1 : (lastValueIndex - firstValueIndex) + 1;
    return count;
}

console.log(sortedFrequency([1,1,2,2,2,2,3],2)) // 4
console.log(sortedFrequency([1,1,2,2,2,2,3],3)) // 1
console.log(sortedFrequency([1,1,2,2,2,2,3],1)) // 2
console.log(sortedFrequency([1,1,2,2,2,2,3],4)) // -1

module.exports = sortedFrequency