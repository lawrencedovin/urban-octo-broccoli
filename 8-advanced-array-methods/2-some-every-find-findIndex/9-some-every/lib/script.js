const words = [
  'consanguineous',
  'tsktsk',
  'rotavator',
  'psychophysicotherapeutics',
  'squirrelled',
  'pseudopesudohypoparathyroidism'
];

console.log(words.some((word) => {
  return word.length > 25;
}));

console.log(words.some((word) => {
  return word.indexOf('thyroid') !== -1;
}));

words.every((word) => {
  return word.length > 5;
});

function allStrings(arr){
  return arr.every((element) => {
    return typeof element === 'string';
  });
}

console.log(allStrings(words));

const button = document.querySelector('button');
button.addEventListener('click', (e) => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const allChecked = Array.from(checkboxes).every((checkbox) => {
    return checkbox.checked;
  });
  if(!allChecked) alert('PLEASE AGREEEEEE');
});