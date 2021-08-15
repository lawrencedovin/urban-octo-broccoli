/**
 * Returns value with index position.
 * Returns -1 if not found.
 */

const binarySearch = (array, value) => {
    let leftIndex = 0;
    let rightIndex = array.length - 1;

    while(leftIndex <= rightIndex) {
        let middleIndex = Math.ceil((leftIndex + rightIndex) / 2);
        let middleValue = array[middleIndex];

        if(value > middleValue) {
            leftIndex = middleIndex + 1;
        }
        else if(value < middleValue) {
            rightIndex = middleIndex - 1;
        }
        else {
            return `Value: ${array[middleIndex]} Index: ${middleIndex}`;
        }
    }

    return -1;
}

console.log(binarySearch([1,2,3,4,5,6,7,8], 6));