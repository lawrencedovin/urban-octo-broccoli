let binarySearch = (array, value) => {
    let leftIndex = 0;
    let rightIndex = array.length-1;

    while(leftIndex <= rightIndex) {

        let middleIndex = Math.round((rightIndex + leftIndex) / 2);
        let middleValue = array[middleIndex];

        if (value < middleValue) {
            rightIndex = middleIndex - 1;
        }
        else if (value > middleValue) {
            leftIndex = middleIndex + 1;
        }
        else {
            return `Found value:${array[middleIndex]} at index ${middleIndex}`;
        }
    }

    return -1;

}

console.log(binarySearch([1,2,3,4], 3));
console.log(binarySearch([1,2,3,4,5,6,7,8], 6));

// you move the left index to the right +1 if you want the middle number to move and be greater if value is greater
// you move the right index to the left -1 if you want the middle number to move and be lesser if value is lesser