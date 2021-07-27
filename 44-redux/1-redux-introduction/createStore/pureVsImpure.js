// Pure vs Impure: Example 1

const addToArrImpure = (arr, val) => {
    arr.push(val);
    return arr;
}

const addToArrPure = (arr, val) => {
    return [...arr, val];
}

// let arr = [1,2,3];

// addToArrPure(arr, 4);
// console.log(arr);

// addToArrImpure(arr, 4);
// console.log(arr);

// Pure vs Impure Example 2

const addToObjImpure = (obj, key, val) => {
    obj[key] = val;
    return obj;
}

let dog = { name: 'Whiskers' };
addToObjImpure(dog, 'favFood', 'popcorn');
console.log(dog);

addToObjPure = (obj, key, val) => {
    return {...obj, [key]: val};
}

// let cat = { name: 'Potato' };
// addToObjPure(cat, 'favFood', 'mango');
// console.log(addToObjPure(cat, 'favFood', 'mango'));
// console.log(cat);

// Pure vs Impure Example 3
// impure: doubles values in an array
const doubleImpure = (nums) => {
    nums.forEach((num, i) => nums[i] *= 2);
    return nums;
}
  
let nums = [1, 2, 3];
// doubleImpure(nums);
// console.log(nums); // [2, 4, 6] <-- impure!


// pure: doubles values in an array
function doublePure(nums) {
    return nums.map(num => 2 * num);
}

doublePure(nums);
console.log(nums); // [1, 2, 3] <-- pure!