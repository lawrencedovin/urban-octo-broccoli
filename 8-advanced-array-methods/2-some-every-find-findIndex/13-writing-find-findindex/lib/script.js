// function myFind(arr, callback){
//   let myArray = [];
//   for(let i = 0;  i < arr.length; i++){
//     if(callback(arr[i], i, arr)) myArray.push(arr[i]);
//   }
//   return myArray[0];
// }

function myFind(arr, callback) {
  for(let i = 0;  i < arr.length; i++){
    if(callback(arr[i], i, arr)) return arr[i];
  }
}

function myFindIndex(arr, callback) {
  for(let i = 0;  i < arr.length; i++){
    if(callback(arr[i], i, arr)) return i;
  }
  return -1;
}

console.log(myFind([1,2,3,4,5], (num) => {
  return num % 2 === 0;
} ));


console.log(myFindIndex([1,3,5], (num) => {
  return num % 2 === 0;
} ));
