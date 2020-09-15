function mySum(arr, callback) {
  for(let i = 0; i < arr.length; i++){
    if(callback(arr[i], i, arr)) return true;
  }
  return false;
}

console.log(mySum([4,5,6,7], (num) => {
  return num > 5;
}));

function myEvery(arr, callback) {
  for(let i = 0; i < arr.length; i++){
    if(!callback(arr[i], i, arr)) return false;
  }
  return true;
}

console.log(myEvery([4,5,6,7], (num) => {
  return num > 5;
}));