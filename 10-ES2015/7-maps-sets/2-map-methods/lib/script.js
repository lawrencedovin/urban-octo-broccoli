const add = (x, y) => x + y;
const mult = (x, y) => x * y;

const funcCalls = newMap();
funcCalls.set(add, 0);
funcCalls.set(mult, 0);

funcCalls.set(add, 1);
funcCalls.set(mult, 9);

funcCalls.get(mult); // 9

///////Passing Array//////////
const bandData = [
  [3, "3 Doors Down"],
  ["three", "Three Dog Night"],
  ["nine", "Nine Inch Nails"],
  ["four", "The Four Seasons"],
  [41, "Sum 41"],
];

const bandMap = new Map(bandData);
[...bandMap] 
// returns to bandData format

bandMap.set(182, "Blink 182").set("twenty", "Matchbox Twenty");

bandMap.has(41);
// true

bandMap.has(9);
// false

bandMap.delete("twenty");
bandMap.clear();
// Removes everything

bandMap.keys();
[...bandMap.keys()]
// turns the keys into an array

bandMap.values();
[...bandMap.values()];
