function myForEach(arr, callback) {
  for(let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

function capitalize(val) {
  console.log(val.toUpperCase());
}

const colors = ['blue', 'red', 'orange', 'purple'];
myForEach(colors, (color, i) => {
  console.log(color.toUpperCase(), ` at index of: ${i}`);
});