const bubbleSort = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        let swapped = false;
        for(let j = 0; j < arr.length - i; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = true;
            }
        }
        // If the inner loop iterates without any elements being swapped
        // it means the items are already in correct order and loop doesn't 
        // need to continue.
        if(!swapped) break;
    }
    console.log("Total Count: " , count);
    return arr;
}

