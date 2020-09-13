const words = [
  'iamververysmartsentenceandlongsentence',
  'rufffrufffrufffffffffrufffffffffff',
  'whydidthechickencrosstheroad',
  'choco',
  'bll',
  'unimaginatevely'
];

const longWords = words.filter((word) => {
  return word.length >= 20;
});

const cOrUWords = words.filter((word) => {
  return word[0] === 'c' || word[0] === 'u';
}); 

const isVowel = function(char) {
  return 'aeiou'.indexOf(char) != -1;
}

const containsVowel = function(word) {
  for(let char of word){
    if(isVowel(char)) return true;
  }
  return false;
}

const containsVowels = words.filter(containsVowel);
const noVowels = words.filter((word) => {
  return !containsVowel(word);
});

console.log(cOrUWords);
console.log(longWords);
console.log(containsVowels);
console.log(noVowels);

