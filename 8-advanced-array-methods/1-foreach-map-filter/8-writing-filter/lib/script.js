const myFilter = function(arr, callback) {
  const filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    if(callback(arr[i], i, arr)) filteredArray.push(arr[i]);
  }
  return filteredArray;
}

const letters = ['l','m','a', 'a'];
const a = myFilter(letters, (letter) => {
  return letter === 'a';
});
console.log(a);

const words = ['chicken', 'egg', 'hen', 'dog'];
const everyOtherWord = myFilter(words, (word, i) => {
  return i % 2 === 0 ;
});

console.log(everyOtherWord);