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

        if(array[leftIndex] === value) return leftIndex;
        if(array[rightIndex - 1] === value) rightIndex = middleIndex - 1;
        else if(array[leftIndex + 1] !== value) leftIndex = middleIndex + 1;
        else return middleIndex;
    }
    return -1;
}


// if(array[rightIndex] === value && array[rightIndex + 1] !== value){
        //     lastValueFoundIndex = rightIndex;
        // }

function sortedFrequency(array, value) {
    let firstValueIndex = findFirstIndex(array, value);
    return firstValueIndex;
}

console.log(sortedFrequency([1,1,2,2,2,2,3],2)) // 4
console.log(sortedFrequency([1,1,2,2,2,2,3],3)) // 1
console.log(sortedFrequency([1,1,2,2,2,2,3],1)) // 2
console.log(sortedFrequency([1,1,2,2,2,2,3],4)) // -1

module.exports = sortedFrequency