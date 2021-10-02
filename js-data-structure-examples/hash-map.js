// Inserting a key/value pair: O(1) on average; O(n) in the worse case
// Removing a key/value pair: O(1) on average; O(n) in the worse case
// Looking up a key: O(1) on average; O(n) in the worse case

const myMap = new Map();

myMap.set("Nathan", "555-0182");
myMap.set("Jane", "315-0322");

for (let [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}