const numbers = [1,2,3,4];

const doubleNumbers = numbers.map((val) => {
  return val*2;
});

console.log(numbers);
console.log(doubleNumbers);

const todos = [
  {
    id: 1,
    text: 'walk the dog',
    priority: 'high'
  },
  {
    id: 2,
    text: 'walk the chickens',
    priority: 'medium'
  },
  {
    id: 3,
    text: 'feed the cat',
    priority: 'low'
  },
  {
    id: 4,
    text: 'put out fire in my garage',
    priority: 'very high'
  },
];

const todosText = todos.map((val) => {
  return val.text;
});

console.log(todosText);

const links = Array.from(document.querySelectorAll('a'));
const urls = links.map((a) => {
  return a.href;
});

console.log(urls);
