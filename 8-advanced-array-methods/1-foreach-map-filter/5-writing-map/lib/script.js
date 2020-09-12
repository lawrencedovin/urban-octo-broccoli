function myMap(arr, callback){
    const myArr = [];
    for(let i = 0; i < arr.length; i++) {
        myArr.push(callback(arr[i], i, arr));
    }
    return myArr;
}

const numbers = [1,2,3,4];

const doubleNumbers = myMap(numbers, (num) => {
    return num*2;
});

console.log(doubleNumbers);
