// Good for Nearly Sorted data
const bubbleSort = (arr) => {
    for(let i=0; i<arr.length; i++) {
        // For as many elements in the array loop 
        // through all of them checking and comparing 1 place
        // at a time with all elements.
        for(let j=0; j<arr.length-i; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
            console.log(arr);
        }
    }
}

bubbleSort([45,6,7,23,1,19]);