let data = [ 1, [2, [3], 4], 5];

const doubler = (nums) => {
    for(let n of nums) {
        // if item is an Array, then double every number in that array
        if(Array.isArray(n)) {
            doubler(n);
        }
        else {
            console.log(n * 2);
        }
    }
}